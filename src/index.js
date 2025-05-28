const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from GitHub Actions Demo!');
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
    console.log(`
=================================================
🚀 Server running on port ${port}
🌐 Access the application at: http://localhost:${port}
📊 API status endpoint: http://localhost:${port}/api/status
=================================================
For more information, see RUN_INSTRUCTIONS.md
or run: npm run help
`);
  });
}

module.exports = app;
