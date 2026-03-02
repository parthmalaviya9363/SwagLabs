const { expect, test } = require('@playwright/test');

test('Practise', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();

  await page.getByText('Checkboxes').click();

  await expect(page.getByRole('heading', { name: 'Checkboxes' })).toBeVisible();

  const form = page.locator('#checkboxes');
  const first = form.getByRole('checkbox').nth(0);
  const second = form.getByRole('checkbox').nth(1);

  await first.check();
  await second.uncheck();

  await page.goBack();
});
