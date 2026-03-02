const { app, BrowserWindow, dialog, ipcMain, Menu, shell } = require("electron");
const path = require("path");
const fs = require("fs/promises");
const { Document, Packer, Paragraph, HeadingLevel, TextRun } = require("docx");

const PROJECT_EXT = ".novelcraft.json";
const PROJECT_CONTENT_POPOUT_URL = "about:blank#project-content-popout";
const HISTORY_LIMIT = 60;
const MAX_PROJECT_JSON_BYTES = 20 * 1024 * 1024;
const MAX_DOCX_IMPORT_BYTES = 40 * 1024 * 1024;
let mainWindow = null;

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function sanitizeSceneMeta(meta) {
  if (!isPlainObject(meta)) return {};
  return Object.fromEntries(
    Object.entries(meta).map(([key, value]) => [key, typeof value === "string" ? value : String(value ?? "")])
  );
}

function sanitizeProject(input) {
  const raw = isPlainObject(input) ? input : {};
  const scenes = Array.isArray(raw.scenes) ? raw.scenes : [];
  const normalizedScenes = scenes.map((scene, idx) => {
    const safe = isPlainObject(scene) ? scene : {};
    return {
      key: typeof safe.key === "string" && safe.key ? safe.key : `scene-${idx + 1}`,
      label: typeof safe.label === "string" ? safe.label : `Scene ${idx + 1}`,
      beat: typeof safe.beat === "string" ? safe.beat : "Setup",
      color: typeof safe.color === "string" ? safe.color : "#4a90e2",
      notes: typeof safe.notes === "string" ? safe.notes : "",
      collapsed: safe.collapsed === true || safe.collapsed === "true",
      html: typeof safe.html === "string" ? safe.html : "",
      contentHtml: typeof safe.contentHtml === "string" ? safe.contentHtml : (typeof safe.html === "string" ? safe.html : ""),
      meta: sanitizeSceneMeta(safe.meta)
    };
  });

  return {
    title: typeof raw.title === "string" && raw.title.trim() ? raw.title : "Untitled Project",
    author: typeof raw.author === "string" ? raw.author : "",
    scenes: normalizedScenes
  };
}

function errorPayload(error, base = {}) {
  const message = error instanceof Error ? error.message : String(error || "Unknown error");
  return { ...base, ok: false, error: message };
}

function registerSafeIpc(channel, handler, onError = null) {
  ipcMain.handle(channel, async (...args) => {
    try {
      return await handler(...args);
    } catch (error) {
      console.error(`[ipc:${channel}]`, error);
      reportRendererIssue(`ipc:${channel}`, error);
      if (typeof onError === "function") return onError(error);
      return errorPayload(error);
    }
  });
}

function dispatchMenuAction(action, payload = {}) {
  const win = BrowserWindow.getFocusedWindow() || mainWindow || BrowserWindow.getAllWindows()[0];
  if (!win || win.isDestroyed()) return;
  win.webContents.send("menu:action", { action, ...payload });
}

function reportRendererIssue(context, error) {
  const detail = error && typeof error === "object" && "message" in error
    ? String(error.message || "Unknown error")
    : String(error || "Unknown error");
  const stack = error && typeof error === "object" && "stack" in error
    ? String(error.stack || "")
    : "";
  dispatchMenuAction("runtime:issue", { context: String(context || ""), detail, stack });
}

function showQuickStartHelp() {
  dialog.showMessageBox({
    type: "info",
    title: "Quick Start",
    message: "NovelCraft Pro Quick Start",
    detail:
      "1. Add Scene in Timeline or import a DOCX.\n" +
      "2. Select a scene tile and write in the page canvas.\n" +
      "3. Use Format, Outliner, and Review tools.\n" +
      "4. Save from File > Save Project."
  });
}

function showToolGuideHelp() {
  dialog.showMessageBox({
    type: "info",
    title: "Tool Guide",
    message: "NovelCraft Pro Tool Guide",
    detail:
      "File: New/Open/Save/Export project files.\n" +
      "Timeline: Scene structure and story planning.\n" +
      "Format: Typography and paragraph styling.\n" +
      "Outliner: Filter and jump by beats/status.\n" +
      "Review: Comments and revision tracking.\n" +
      "Studio Dock: Pin or hide tool panels."
  });
}

function showAboutDialog() {
  const desktopTarget = process.platform === "darwin"
    ? "Electron for macOS and Windows"
    : "Electron for Windows and macOS";
  dialog.showMessageBox({
    type: "info",
    title: "About NovelCraft Pro",
    message: "NovelCraft Pro",
    detail:
      "Creator: CerebFastThinkTank\n" +
      `Desktop: ${desktopTarget}\n` +
      "Purpose: Storyboarding and long-form writing workflow"
  });
}

function buildAppMenu() {
  const template = [
    {
      label: "File",
      submenu: [
        { label: "New Project", accelerator: "CmdOrCtrl+N", click: () => dispatchMenuAction("project:new") },
        { label: "Open Project...", accelerator: "CmdOrCtrl+O", click: () => dispatchMenuAction("project:open") },
        { label: "Save Project", accelerator: "CmdOrCtrl+S", click: () => dispatchMenuAction("project:save") },
        { label: "Save Project As...", accelerator: "CmdOrCtrl+Shift+S", click: () => dispatchMenuAction("project:saveAs") },
        { type: "separator" },
        {
          label: "Import DOCX",
          submenu: [
            { label: "Import as Single Scene...", click: () => dispatchMenuAction("project:importDocx", { mode: "single" }) },
            { label: "Import by Page Count...", click: () => dispatchMenuAction("project:importDocx", { mode: "pageCount" }) }
          ]
        },
        {
          label: "Export",
          submenu: [
            { label: "Export as PDF", click: () => dispatchMenuAction("project:export", { format: "pdf" }) },
            { label: "Export as DOCX", click: () => dispatchMenuAction("project:export", { format: "docx" }) }
          ]
        },
        { type: "separator" },
        { role: "close" }
      ]
    },
    { role: "editMenu" },
    { role: "viewMenu" },
    { role: "windowMenu" },
    {
      role: "help",
      submenu: [
        { label: "Quick Start", click: () => showQuickStartHelp() },
        { label: "Tool Guide", click: () => showToolGuideHelp() },
        { label: "Report Issue (Copy Log)", click: () => dispatchMenuAction("help:reportIssue") },
        { type: "separator" },
        { label: "About NovelCraft Pro", click: () => showAboutDialog() }
      ]
    }
  ];

  if (process.platform === "darwin") {
    template.unshift({
      label: app.name,
      submenu: [
        { role: "about" },
        { type: "separator" },
        { role: "services" },
        { type: "separator" },
        { role: "hide" },
        { role: "hideOthers" },
        { role: "unhide" },
        { type: "separator" },
        { role: "quit" }
      ]
    });
  }

  return Menu.buildFromTemplate(template);
}

function buildRendererContextMenuTemplate(win, params = {}) {
  const selectionText = (params.selectionText || "").trim();
  const hasSelection = selectionText.length > 0;
  const editable = Boolean(params.isEditable);
  const flags = params.editFlags || {};
  const template = [];

  if (editable) {
    template.push(
      { role: "undo", enabled: Boolean(flags.canUndo) },
      { role: "redo", enabled: Boolean(flags.canRedo) },
      { type: "separator" },
      { role: "cut", enabled: Boolean(flags.canCut) },
      { role: "copy", enabled: Boolean(flags.canCopy || hasSelection) },
      { role: "paste", enabled: Boolean(flags.canPaste) },
      { role: "delete", enabled: Boolean(flags.canDelete) },
      { type: "separator" },
      { role: "selectAll" }
    );
  } else if (hasSelection) {
    template.push(
      { role: "copy", enabled: true },
      { type: "separator" },
      { role: "selectAll" }
    );
  }

  if (!app.isPackaged && win && !win.isDestroyed()) {
    if (template.length > 0) template.push({ type: "separator" });
    template.push({
      label: "Inspect Element",
      click: () => {
        try {
          win.webContents.inspectElement(params.x ?? 0, params.y ?? 0);
        } catch (error) {
          console.error("[context-menu.inspect]", error);
        }
      }
    });
  }

  return template;
}

function createWindow() {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.focus();
    return mainWindow;
  }

  const win = new BrowserWindow({
    width: 1600,
    height: 1000,
    minWidth: 1100,
    minHeight: 700,
    backgroundColor: "#1e1e1e",
    autoHideMenuBar: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow = win;
  win.on("closed", () => {
    if (mainWindow === win) mainWindow = null;
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url === PROJECT_CONTENT_POPOUT_URL) {
      return {
        action: "allow",
        overrideBrowserWindowOptions: {
          width: 500,
          height: 860,
          minWidth: 360,
          minHeight: 520,
          autoHideMenuBar: true,
          backgroundColor: "#1f232a",
          webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true
          }
        }
      };
    }
    if (typeof url === "string" && /^https?:\/\//i.test(url)) {
      shell.openExternal(url).catch((err) => console.error("[shell.openExternal]", err));
    }
    return { action: "deny" };
  });
  win.webContents.on("will-navigate", (event, url) => {
    if (typeof url === "string" && /^https?:\/\//i.test(url)) {
      event.preventDefault();
      shell.openExternal(url).catch((err) => console.error("[shell.openExternal]", err));
    }
  });
  win.webContents.on("render-process-gone", (_event, details) => {
    console.error("[render-process-gone]", details);
    reportRendererIssue("render-process-gone", JSON.stringify(details || {}));
  });
  win.webContents.on("did-fail-load", (_event, code, desc, validatedUrl) => {
    if (code === -3) return;
    console.error("[did-fail-load]", { code, desc, validatedUrl });
    reportRendererIssue("did-fail-load", `${code} ${desc || ""} ${validatedUrl || ""}`.trim());
  });
  win.webContents.on("context-menu", (_event, params) => {
    const template = buildRendererContextMenuTemplate(win, params);
    if (!Array.isArray(template) || template.length === 0) return;
    const menu = Menu.buildFromTemplate(template);
    menu.popup({ window: win });
  });

  win.loadFile("index.html");
  return win;
}

function getAutosavePath() {
  return path.join(app.getPath("userData"), "autosave", `latest${PROJECT_EXT}`);
}

function getHistoryDir() {
  return path.join(app.getPath("userData"), "history");
}

function timestampForFile() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
}

function slugifyName(input) {
  return (input || "project")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48) || "project";
}

function ensureProjectExtension(filePath) {
  if (typeof filePath !== "string" || !filePath.trim()) {
    throw new Error("Invalid project file path.");
  }
  return filePath.endsWith(PROJECT_EXT) ? filePath : `${filePath}${PROJECT_EXT}`;
}

function stripHtml(input) {
  return (input || "")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(input) {
  return (input || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildExportHtml(project) {
  const scenes = Array.isArray(project.scenes) ? project.scenes : [];
  const blocks = scenes
    .map((scene, idx) => {
      const title = escapeHtml(scene.label || `Scene ${idx + 1}`);
      const meta = scene.meta || {};
      const metaLine = [
        meta.status ? `Status: ${escapeHtml(meta.status)}` : "",
        meta.pov ? `POV: ${escapeHtml(meta.pov)}` : "",
        meta.location ? `Location: ${escapeHtml(meta.location)}` : ""
      ].filter(Boolean).join(" | ");
      const metaHtml = metaLine ? `<p class="meta">${metaLine}</p>` : "";
      return `<section class="scene"><h2>${title}</h2>${metaHtml}<div class="scene-body">${scene.contentHtml || "<p></p>"}</div></section>`;
    })
    .join("");

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: 'Times New Roman', serif; margin: 1in; color: #111; line-height: 1.5; }
    h1 { font-size: 24px; margin: 0 0 20px; }
    h2 { font-size: 18px; margin: 24px 0 8px; border-bottom: 1px solid #ddd; padding-bottom: 4px; }
    .meta { color: #666; font-size: 12px; margin: 0 0 12px; }
    .scene { page-break-inside: avoid; }
  </style>
</head>
<body>
  <h1>${escapeHtml(project.title || "NovelCraft Export")}</h1>
  ${blocks}
</body>
</html>`;
}

async function writeJsonFile(filePath, payload) {
  const normalized = sanitizeProject(payload);
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(normalized, null, 2), "utf-8");
}

async function readJsonFile(filePath) {
  const stat = await fs.stat(filePath);
  if (stat.size > MAX_PROJECT_JSON_BYTES) {
    throw new Error(`Project file is too large (${Math.round(stat.size / (1024 * 1024))} MB).`);
  }
  const raw = await fs.readFile(filePath, "utf-8");
  return sanitizeProject(JSON.parse(raw));
}

async function createHistorySnapshot(project, sourcePath) {
  const normalizedProject = sanitizeProject(project);
  const historyDir = getHistoryDir();
  await fs.mkdir(historyDir, { recursive: true });
  const baseName = sourcePath ? path.basename(sourcePath, path.extname(sourcePath)) : slugifyName(normalizedProject.title);
  const name = `${slugifyName(baseName)}-${timestampForFile()}${PROJECT_EXT}`;
  const filePath = path.join(historyDir, name);
  await writeJsonFile(filePath, normalizedProject);

  const files = await fs.readdir(historyDir);
  const sorted = files
    .filter((f) => f.endsWith(PROJECT_EXT))
    .map((f) => path.join(historyDir, f))
    .sort((a, b) => b.localeCompare(a));

  const stale = sorted.slice(HISTORY_LIMIT);
  await Promise.all(stale.map((entry) => fs.rm(entry, { force: true })));

  return filePath;
}

function buildDocxMetaLine(meta) {
  const parts = [];
  if (meta?.status) parts.push(`Status: ${meta.status}`);
  if (meta?.pov) parts.push(`POV: ${meta.pov}`);
  if (meta?.location) parts.push(`Location: ${meta.location}`);
  if (meta?.time) parts.push(`Time: ${meta.time}`);
  if (meta?.characters) parts.push(`Characters: ${meta.characters}`);
  return parts.join(" | ");
}

async function exportToDocx(targetPath, project) {
  const scenes = Array.isArray(project.scenes) ? project.scenes : [];
  const children = [
    new Paragraph({
      text: project.title || "NovelCraft Export",
      heading: HeadingLevel.TITLE
    })
  ];

  scenes.forEach((scene, idx) => {
    children.push(new Paragraph({ text: scene.label || `Scene ${idx + 1}`, heading: HeadingLevel.HEADING_1 }));
    const metaLine = buildDocxMetaLine(scene.meta || {});
    if (metaLine) {
      children.push(new Paragraph({
        children: [new TextRun({ text: metaLine, italics: true, color: "555555" })]
      }));
    }

    const text = stripHtml(scene.contentHtml || "");
    if (text) {
      const paragraphs = text.split(/\n+/).map((line) => line.trim()).filter(Boolean);
      if (paragraphs.length === 0) {
        children.push(new Paragraph({ text }));
      } else {
        paragraphs.forEach((line) => children.push(new Paragraph({ text: line })));
      }
    } else {
      children.push(new Paragraph({ text: "" }));
    }
  });

  const doc = new Document({
    sections: [{ properties: {}, children }]
  });
  const buffer = await Packer.toBuffer(doc);
  await fs.writeFile(targetPath, buffer);
}

async function exportToPdf(targetPath, project) {
  const win = new BrowserWindow({ show: false, webPreferences: { sandbox: true } });
  const html = buildExportHtml(project);
  await win.loadURL(`data:text/html;charset=UTF-8,${encodeURIComponent(html)}`);
  const pdfData = await win.webContents.printToPDF({
    printBackground: true,
    margins: { marginType: "default" },
    pageSize: "A4"
  });
  await fs.writeFile(targetPath, pdfData);
  win.destroy();
}

function registerIpcHandlers() {
  registerSafeIpc("project:pick-open", async () => {
    const result = await dialog.showOpenDialog({
      title: "Open NovelCraft Project",
      properties: ["openFile"],
      filters: [
        { name: "NovelCraft Project", extensions: ["json"] },
        { name: "All Files", extensions: ["*"] }
      ]
    });

    if (result.canceled || result.filePaths.length === 0) return { canceled: true };
    const filePath = result.filePaths[0];
    const data = await readJsonFile(filePath);
    return { canceled: false, filePath, data };
  }, (error) => errorPayload(error, { canceled: true }));

  registerSafeIpc("project:pick-import-docx", async () => {
    const result = await dialog.showOpenDialog({
      title: "Import DOCX",
      properties: ["openFile"],
      filters: [
        { name: "Word Document", extensions: ["docx"] }
      ]
    });

    if (result.canceled || result.filePaths.length === 0) return { canceled: true };
    const filePath = result.filePaths[0];
    const stat = await fs.stat(filePath);
    if (stat.size > MAX_DOCX_IMPORT_BYTES) {
      throw new Error(`DOCX file is too large (${Math.round(stat.size / (1024 * 1024))} MB).`);
    }
    const buffer = await fs.readFile(filePath);
    return {
      canceled: false,
      filePath,
      base64: buffer.toString("base64")
    };
  }, (error) => errorPayload(error, { canceled: true }));

  registerSafeIpc("project:pick-save", async (_event, defaultPath) => {
    const fallbackPath = path.join(app.getPath("documents"), `NovelCraft${PROJECT_EXT}`);
    const resolvedDefault = typeof defaultPath === "string" && defaultPath.trim() ? defaultPath : fallbackPath;
    const result = await dialog.showSaveDialog({
      title: "Save NovelCraft Project",
      defaultPath: resolvedDefault,
      filters: [
        { name: "NovelCraft Project", extensions: ["json"] }
      ]
    });

    if (result.canceled || !result.filePath) return { canceled: true };
    return { canceled: false, filePath: ensureProjectExtension(result.filePath) };
  }, (error) => errorPayload(error, { canceled: true }));

  registerSafeIpc("project:save", async (_event, payload) => {
    const safePayload = isPlainObject(payload) ? payload : {};
    const filePath = ensureProjectExtension(String(safePayload.filePath || ""));
    const project = sanitizeProject(safePayload.project);
    await writeJsonFile(filePath, project);
    if (safePayload.createHistory) {
      await createHistorySnapshot(project, filePath);
    }
    return { ok: true, filePath };
  });

  registerSafeIpc("project:autosave", async (_event, payload) => {
    const safePayload = isPlainObject(payload) ? payload : {};
    const filePath = getAutosavePath();
    await writeJsonFile(filePath, sanitizeProject(safePayload.project));
    return { ok: true, filePath };
  });

  registerSafeIpc("project:load-autosave", async () => {
    try {
      const filePath = getAutosavePath();
      const data = await readJsonFile(filePath);
      return { ok: true, filePath, data };
    } catch (_error) {
      return { ok: false };
    }
  });

  registerSafeIpc("project:create-history", async (_event, payload) => {
    const safePayload = isPlainObject(payload) ? payload : {};
    const project = sanitizeProject(safePayload.project);
    const sourcePath = typeof safePayload.sourcePath === "string" ? safePayload.sourcePath : "";
    const filePath = await createHistorySnapshot(project, sourcePath);
    return { ok: true, filePath };
  });

  registerSafeIpc("project:list-history", async () => {
    const dir = getHistoryDir();
    await fs.mkdir(dir, { recursive: true });
    const files = await fs.readdir(dir);
    const entries = files
      .filter((file) => file.endsWith(PROJECT_EXT))
      .sort((a, b) => b.localeCompare(a))
      .map((file) => ({
        name: file,
        filePath: path.join(dir, file)
      }));
    return { ok: true, entries };
  });

  registerSafeIpc("project:load-history", async (_event, filePath) => {
    if (typeof filePath !== "string" || !filePath.trim()) {
      throw new Error("Invalid history file path.");
    }
    const data = await readJsonFile(filePath);
    return { ok: true, data };
  });

  registerSafeIpc("project:export", async (_event, payload) => {
    const safePayload = isPlainObject(payload) ? payload : {};
    const project = sanitizeProject(safePayload.project);
    const requestedFormat = String(safePayload.format || "pdf").toLowerCase();
    const format = requestedFormat === "docx" ? "docx" : "pdf";
    const title = slugifyName(project.title || "novelcraft-export");
    const extension = format === "docx" ? "docx" : "pdf";
    const saveResult = await dialog.showSaveDialog({
      title: `Export ${format.toUpperCase()}`,
      defaultPath: path.join(app.getPath("documents"), `${title}.${extension}`),
      filters: [{ name: format.toUpperCase(), extensions: [extension] }]
    });

    if (saveResult.canceled || !saveResult.filePath) return { canceled: true };
    const targetPath = saveResult.filePath;

    if (format === "docx") {
      await exportToDocx(targetPath, project);
    } else {
      await exportToPdf(targetPath, project);
    }

    return { canceled: false, filePath: targetPath };
  }, (error) => errorPayload(error, { canceled: true }));
}

const gotSingleInstanceLock = app.requestSingleInstanceLock();
if (!gotSingleInstanceLock) {
  app.quit();
} else {
  app.on("second-instance", () => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  process.on("uncaughtException", (error) => {
    console.error("[uncaughtException]", error);
    reportRendererIssue("uncaughtException", error);
  });
  process.on("unhandledRejection", (reason) => {
    console.error("[unhandledRejection]", reason);
    reportRendererIssue("unhandledRejection", reason);
  });

  app.whenReady().then(() => {
    registerIpcHandlers();
    Menu.setApplicationMenu(buildAppMenu());
    createWindow();

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
}
