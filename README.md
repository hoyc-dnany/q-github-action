# GitHub Actions Demo

這是一個簡單的 GitHub Actions CI/CD 流程示範專案。

## 專案結構

```
.
├── .github/workflows/  # GitHub Actions 工作流程定義
├── src/               # 源碼目錄
├── tests/             # 測試檔案
├── package.json       # 專案依賴和腳本
└── README.md          # 專案說明
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

## 本地開發

### 如何運行應用程式 (How to Run the Application)

**快速啟動指南:**

1. 安裝依賴：
```
npm install
```

2. 啟動應用程式：
```
npm start
```

3. 在瀏覽器中訪問：http://localhost:3000

> **注意:** 詳細的運行說明請參閱 [RUN_INSTRUCTIONS.md](./RUN_INSTRUCTIONS.md)

### 其他命令

執行測試：
```
npm test
```

建置應用程式：
```
npm run build
```
