#!/usr/bin/env bash
set -euo pipefail

ARCH="${1:-}"
if [[ -z "${ARCH}" ]]; then
  echo "Usage: $0 <x64|arm64>" >&2
  exit 1
fi

APP_NAME="NovelCraft Pro.app"
if [[ "${ARCH}" == "arm64" ]]; then
  APP_PATH="dist/mac-arm64/${APP_NAME}"
else
  APP_PATH="dist/mac/${APP_NAME}"
fi

if [[ ! -d "${APP_PATH}" ]]; then
  echo "App bundle not found: ${APP_PATH}" >&2
  exit 1
fi

echo "Verifying app bundle: ${APP_PATH}"

INFO_PLIST="${APP_PATH}/Contents/Info.plist"
if [[ ! -f "${INFO_PLIST}" ]]; then
  echo "Missing Info.plist: ${INFO_PLIST}" >&2
  exit 1
fi

BUNDLE_ID="$(/usr/libexec/PlistBuddy -c "Print :CFBundleIdentifier" "${INFO_PLIST}")"
if [[ "${BUNDLE_ID}" != "com.storyarc.novelcraftpro" ]]; then
  echo "Unexpected bundle id: ${BUNDLE_ID}" >&2
  exit 1
fi

APP_VERSION="$(/usr/libexec/PlistBuddy -c "Print :CFBundleShortVersionString" "${INFO_PLIST}")"
if [[ -z "${APP_VERSION}" ]]; then
  echo "Missing app version in Info.plist" >&2
  exit 1
fi

codesign --verify --deep --strict --verbose=2 "${APP_PATH}"

if [[ -n "${CSC_LINK:-}" && -n "${CSC_KEY_PASSWORD:-}" ]]; then
  echo "Checking Gatekeeper assessment..."
  spctl --assess --type execute --verbose=4 "${APP_PATH}"

  echo "Validating notarization staple..."
  xcrun stapler validate "${APP_PATH}"
else
  echo "Skipping Gatekeeper/notarization checks (unsigned build)."
fi

echo "macOS verification passed for ${ARCH}."

