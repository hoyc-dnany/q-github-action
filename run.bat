@echo off
echo =====================================
echo   GitHub Actions 示範專案啟動腳本
echo =====================================

:: 檢查 Node.js 是否已安裝
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo 錯誤: 未找到 Node.js。請先安裝 Node.js: https://nodejs.org/
    exit /b 1
)

:: 檢查 npm 是否已安裝
where npm >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo 錯誤: 未找到 npm。請先安裝 npm。
    exit /b 1
)

:: 安裝依賴
echo 正在安裝依賴套件...
call npm install

:: 啟動應用程式
echo 正在啟動 Web 應用程式...
echo 應用程式將在 http://localhost:3000 運行
echo 按 Ctrl+C 可停止應用程式
echo =====================================
call npm start