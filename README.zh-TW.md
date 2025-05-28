# GitHub Actions 示範專案

這是一個簡單的 GitHub Actions CI/CD 流程示範專案。

## 如何運行這個 Web 應用程式

### 方法一：使用快速啟動腳本（推薦）

我們提供了簡單的腳本來幫助您快速啟動應用程式：

#### Linux/macOS 用戶:

```bash
# 先給予腳本執行權限
chmod +x run.sh

# 執行腳本
./run.sh
```

#### Windows 用戶:

```
# 在命令提示字元或 PowerShell 中執行
run.bat
```

這些腳本會自動安裝依賴並啟動 Web 應用程式。

### 方法二：手動步驟

#### 前置需求

在開始之前，請確保您的電腦已安裝以下軟體：

1. [Node.js](https://nodejs.org/) (建議使用 LTS 版本)
2. npm (通常會隨 Node.js 一起安裝)

### 步驟 1: 安裝依賴套件

首先，在專案根目錄下執行以下命令安裝所有必要的依賴套件：

```bash
npm install
```

### 步驟 2: 運行 Web 應用程式

安裝完依賴套件後，您可以使用以下命令啟動 Web 應用程式：

```bash
npm start
```

啟動後，您會在終端機看到類似以下的訊息：

```
Server running on port 3000
```

這表示 Web 應用程式已成功啟動，並在 3000 埠口運行。

### 步驟 3: 訪問 Web 應用程式

打開您的網頁瀏覽器，訪問以下網址：

- 主頁面: http://localhost:3000/
- API 狀態頁面: http://localhost:3000/api/status

## 其他常用命令

### 運行測試

執行單元測試：

```bash
npm test
```

### 建置應用程式

建置應用程式（將源碼複製到 dist 目錄）：

```bash
npm run build
```

## 專案結構

```
.
├── .github/workflows/  # GitHub Actions 工作流程定義
├── src/               # 源碼目錄
│   ├── index.js       # 主應用程式檔案
│   └── utils.js       # 工具函數
├── tests/             # 測試檔案
│   └── utils.test.js  # 工具函數測試
├── package.json       # 專案依賴和腳本
└── README.md          # 專案說明 (英文版)
```

## 功能

- 簡單的 Express 應用程式
- 單元測試使用 Jest
- 自動化 CI/CD 流程

## GitHub Actions 工作流程

此專案包含一個基本的 CI/CD 流程，當程式碼推送到 main 分支或建立 Pull Request 時會自動執行：

1. 檢出程式碼
2. 設置 Node.js 環境
3. 安裝依賴
4. 執行測試
5. 建置應用程式
6. 上傳建置產物