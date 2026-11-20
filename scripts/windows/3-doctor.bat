@echo off
set "ROOT=%LINGXI_HOME%"
if not defined ROOT set "ROOT=%USERPROFILE%\lingxi"
if not exist "%ROOT%\lingxi\src\hub.mjs" (
  echo [STOP] Lingxi is NOT installed yet - %ROOT% not found.
  echo Please run install-windows.ps1 FIRST.
  pause
  exit /b 1
)
if not exist "%ROOT%\lingxi\data" mkdir "%ROOT%\lingxi\data"
cd /d "%ROOT%\lingxi"
echo Checking platform login status and upload pages (no upload, no fill).
node src\hub.mjs doctor
pause
