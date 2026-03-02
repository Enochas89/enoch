/* eslint-disable no-console */
const path = require("path");
const { notarize } = require("@electron/notarize");

module.exports = async function afterSign(context) {
  if (process.platform !== "darwin") return;

  const requireNotarization = process.env.REQUIRE_MAC_NOTARIZATION === "1";
  const appleId = process.env.APPLE_ID;
  const appleIdPassword = process.env.APPLE_APP_SPECIFIC_PASSWORD;
  const teamId = process.env.APPLE_TEAM_ID;

  if (!appleId || !appleIdPassword || !teamId) {
    const msg = "Skipping macOS notarization (APPLE_ID / APPLE_APP_SPECIFIC_PASSWORD / APPLE_TEAM_ID not fully set).";
    if (requireNotarization) throw new Error(msg);
    console.warn(msg);
    return;
  }

  const appName = context.packager.appInfo.productFilename;
  const appPath = path.join(context.appOutDir, `${appName}.app`);

  console.log(`Notarizing ${appPath} ...`);
  await notarize({
    tool: "notarytool",
    appBundleId: context.packager.appInfo.id,
    appPath,
    appleId,
    appleIdPassword,
    teamId
  });
  console.log("Notarization complete.");
};

