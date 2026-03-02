# NovelCraft Pro Desktop

Desktop wrapper for the NovelCraft editor using Electron (Windows + macOS).

## Prerequisites

- Node.js 18+ (LTS recommended)

## Run locally

```powershell
npm install
npm start
```

## Build Windows installer (.exe)

```powershell
npm run build:win
```

Installer output will be created in `dist/`.

## Signed Windows build (recommended for deployment)

1. Obtain a valid code-signing certificate (`.pfx`) from a trusted CA.
2. Run signing preflight:

```powershell
npm run signing:check
```

3. Build signed installer:

```powershell
npm run build:win:signed -- -PfxPath "C:\path\to\cert.pfx" -PfxPassword "your-password"
```

Signed output will be created in `dist_signed/`.

## Build portable Windows app

```powershell
npm run build:portable
```

## Build macOS installers (.dmg + .zip)

macOS builds must run on macOS (local Mac or GitHub Actions).

1. Generate mac icon from `icon.png`:

```bash
bash ./scripts/generate-mac-icon.sh
```

2. Build installers:

```bash
npm run build:mac
```

Or per architecture:

```bash
npm run build:mac:x64
npm run build:mac:arm64
```

Artifacts are created in `dist/`:
- `NovelCraft Pro-<version>-mac-x64.dmg`
- `NovelCraft Pro-<version>-mac-arm64.dmg`
- matching `.zip` files

## macOS signing and notarization (required for trusted installs)

Set these environment variables before running mac build:

- `CSC_LINK`: Developer ID Application certificate (`.p12`) path or base64
- `CSC_KEY_PASSWORD`: certificate password
- `APPLE_ID`: Apple developer account email
- `APPLE_APP_SPECIFIC_PASSWORD`: app-specific password
- `APPLE_TEAM_ID`: Apple Team ID

When credentials are present, `scripts/notarize.js` runs automatically after signing.

## GitHub Actions mac build

Workflow: `.github/workflows/build-macos.yml`

- Builds native Intel and Apple Silicon installers.
- If signing secrets are configured, it signs + notarizes.
- If signing secrets are missing, it still builds unsigned test artifacts.
- Runs automated mac verification (`Info.plist`, `codesign`, and signed builds also run `spctl` + notarization staple validation).

Required GitHub repository secrets for signed release:

- `CSC_LINK`
- `CSC_KEY_PASSWORD`
- `APPLE_ID`
- `APPLE_APP_SPECIFIC_PASSWORD`
- `APPLE_TEAM_ID`
