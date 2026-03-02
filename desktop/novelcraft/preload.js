const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("novelcraft", {
  platform: process.platform,
  pickOpenProject: () => ipcRenderer.invoke("project:pick-open"),
  pickImportDocx: () => ipcRenderer.invoke("project:pick-import-docx"),
  pickSaveProject: (defaultPath) => ipcRenderer.invoke("project:pick-save", defaultPath),
  saveProject: (payload) => ipcRenderer.invoke("project:save", payload),
  autosaveProject: (payload) => ipcRenderer.invoke("project:autosave", payload),
  loadAutosave: () => ipcRenderer.invoke("project:load-autosave"),
  createHistorySnapshot: (payload) => ipcRenderer.invoke("project:create-history", payload),
  listHistorySnapshots: () => ipcRenderer.invoke("project:list-history"),
  loadHistorySnapshot: (filePath) => ipcRenderer.invoke("project:load-history", filePath),
  exportProject: (payload) => ipcRenderer.invoke("project:export", payload),
  onMenuAction: (handler) => {
    if (typeof handler !== "function") return;
    ipcRenderer.on("menu:action", (_event, payload) => handler(payload));
  }
});
