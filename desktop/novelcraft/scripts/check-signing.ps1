$ErrorActionPreference = "Stop"

Write-Host "Signing environment check" -ForegroundColor Cyan
Write-Host "------------------------"

$vars = @("CSC_LINK", "CSC_KEY_PASSWORD", "WIN_CSC_LINK", "WIN_CSC_KEY_PASSWORD", "CSC_NAME")
foreach ($v in $vars) {
  if (Test-Path "env:$v") {
    Write-Host "$v=SET"
  }
  else {
    Write-Host "$v=NOT_SET"
  }
}

Write-Host ""
Write-Host "Code-signing certs in CurrentUser\\My:" -ForegroundColor Cyan
$userCerts = Get-ChildItem Cert:\CurrentUser\My | Where-Object {
  $_.EnhancedKeyUsageList.FriendlyName -contains "Code Signing"
}
if ($userCerts) {
  $userCerts | Select-Object Subject, Thumbprint, NotAfter | Format-Table -AutoSize
}
else {
  Write-Host "None found."
}

Write-Host ""
Write-Host "Code-signing certs in LocalMachine\\My:" -ForegroundColor Cyan
$machineCerts = Get-ChildItem Cert:\LocalMachine\My | Where-Object {
  $_.EnhancedKeyUsageList.FriendlyName -contains "Code Signing"
}
if ($machineCerts) {
  $machineCerts | Select-Object Subject, Thumbprint, NotAfter | Format-Table -AutoSize
}
else {
  Write-Host "None found."
}
