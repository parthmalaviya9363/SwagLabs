const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'], ['allure-playwright']],
  use: {
    viewport: null,
    deviceScaleFactor: undefined,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        launchOptions: {
          args: ['--start-maximized'],
          headless: true,
        },
      },
    },
  ],
});
