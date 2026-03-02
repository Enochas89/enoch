param(
  [string]$PfxPath = $env:CSC_LINK,
  [string]$PfxPassword = $env:CSC_KEY_PASSWORD
)

$ErrorActionPreference = "Stop"

if (-not $PfxPath) {
  throw "Missing PFX path. Pass -PfxPath or set CSC_LINK."
}

if (-not (Test-Path $PfxPath)) {
  throw "PFX file not found: $PfxPath"
}

if (-not $PfxPassword) {
  throw "Missing PFX password. Pass -PfxPassword or set CSC_KEY_PASSWORD."
}

$resolvedPfx = (Resolve-Path $PfxPath).Path
$env:CSC_LINK = $resolvedPfx
$env:CSC_KEY_PASSWORD = $PfxPassword
$env:WIN_CSC_LINK = $resolvedPfx
$env:WIN_CSC_KEY_PASSWORD = $PfxPassword

Write-Host "Using signing certificate: $resolvedPfx" -ForegroundColor Green
Write-Host "Building signed Windows installer..." -ForegroundColor Green

npx electron-builder --win --x64 --config.directories.output=dist_signed

if ($LASTEXITCODE -ne 0) {
  throw "Signed build failed with exit code $LASTEXITCODE"
}

$setup = Get-ChildItem dist_signed -Filter "*Setup-*.exe" | Sort-Object LastWriteTime -Descending | Select-Object -First 1
if (-not $setup) {
  throw "Signed build completed but setup exe was not found in dist_signed."
}

$sig = Get-AuthenticodeSignature $setup.FullName
Write-Host ""
Write-Host "Output: $($setup.FullName)"
Write-Host "Signature status: $($sig.Status)"
if ($sig.SignerCertificate) {
  Write-Host "Signer: $($sig.SignerCertificate.Subject)"
}
