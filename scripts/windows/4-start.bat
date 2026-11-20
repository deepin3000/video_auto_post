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
echo Lingxi daemon starting. Dashboard: http://localhost:8787/ - login key is web.key in config.json (the wizard showed it).
echo Keep this window open - closing it stops Lingxi.
node src\hub.mjs daemon
pause
