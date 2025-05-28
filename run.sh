#!/bin/bash

# 顯示歡迎訊息
echo "====================================="
echo "  GitHub Actions 示範專案啟動腳本"
echo "====================================="

# 檢查 Node.js 是否已安裝
if ! command -v node &> /dev/null; then
    echo "錯誤: 未找到 Node.js。請先安裝 Node.js: https://nodejs.org/"
    exit 1
fi

# 檢查 npm 是否已安裝
if ! command -v npm &> /dev/null; then
    echo "錯誤: 未找到 npm。請先安裝 npm。"
    exit 1
fi

# 安裝依賴
echo "正在安裝依賴套件..."
npm install

# 啟動應用程式
echo "正在啟動 Web 應用程式..."
echo "應用程式將在 http://localhost:3000 運行"
echo "按 Ctrl+C 可停止應用程式"
echo "====================================="
npm start