@echo off
set "ROOT=%LINGXI_HOME%"
if not defined ROOT set "ROOT=%USERPROFILE%\lingxi"
if not exist "%ROOT%\lingxi\src\demo.mjs" (
  echo [STOP] Lingxi is NOT installed yet - %ROOT% not found.
  echo Please run install-windows.ps1 FIRST, then double-click this file.
  pause
  exit /b 1
)
cd /d "%ROOT%\lingxi"
echo Lingxi DEMO mode - fake data, no real accounts touched.
echo Open in browser: http://localhost:8788/?key=demo
echo Press Ctrl+C in this window to stop.
node src\demo.mjs
pause
