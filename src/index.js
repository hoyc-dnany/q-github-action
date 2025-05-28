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
========================================
  GitHub Actions Demo App
========================================
  Server is now running!
  
  Local:            http://localhost:${port}
  Status endpoint:  http://localhost:${port}/api/status
  
  Press Ctrl+C to stop the server
========================================
`);
  });
}

module.exports = app;
