const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

describe('Application Scripts', () => {
  test('package.json contains help script', () => {
    const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
    expect(packageJson.scripts).toHaveProperty('help');
  });

  test('RUN_INSTRUCTIONS.md file exists', () => {
    const exists = fs.existsSync(path.join(__dirname, '../RUN_INSTRUCTIONS.md'));
    expect(exists).toBe(true);
  });

  test('RUN_INSTRUCTIONS.md contains necessary information', () => {
    const content = fs.readFileSync(path.join(__dirname, '../RUN_INSTRUCTIONS.md'), 'utf8');
    expect(content).toContain('How to Run This Web Application');
    expect(content).toContain('npm start');
    expect(content).toContain('npm install');
    expect(content).toContain('localhost:3000');
  });
});