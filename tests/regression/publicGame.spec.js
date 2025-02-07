const { test, expect } = require('@playwright/test');
import baseConfig from '../baseConfig';

test('basic test', async ({ page }) => {
  await page.goto(baseConfig.baseUrl);
  const title = await page.title();
  expect(title).toBe('The Maf Place');    
});
