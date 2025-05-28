const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 設置靜態文件目錄
app.use(express.static(path.join(__dirname, 'public')));

// 首頁路由 - 提供 HTML 頁面
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Service is running',
    timestamp: new Date().toISOString()
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
