const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 2,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
    {
      name: 'iPhone 12',
      use: {
        browserName: 'webkit',
        ...devices['iPhone 12'],
      },
    },
    {
      name: 'Pixel 5',
      use: {
        browserName: 'chromium',
        ...devices['Pixel 5'],
      },
    },
  ],
});