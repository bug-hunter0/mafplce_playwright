const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://maf-place-prod-fe.azurewebsites.net');
  const title = await page.title();
  expect(title).toBe('The Maf Place');
});
