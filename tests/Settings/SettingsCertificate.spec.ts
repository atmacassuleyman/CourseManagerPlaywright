import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://52.170.147.30/auth/signin');
  await page.getByPlaceholder('Type your email address').click();
  await page.getByPlaceholder('Type your email address').fill('suleyman.atmaca@emm-it.de');
  await page.getByPlaceholder('Type your password').click();
  await page.getByPlaceholder('Type your password').press('ControlOrMeta+c');
  await page.getByPlaceholder('Type your password').fill('T%633642945806oc');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('i').getByRole('img').click();
  await page.getByPlaceholder('Type your password').click();
  await page.getByPlaceholder('Type your password').press('ControlOrMeta+a');
  await page.getByPlaceholder('Type your password').fill('T%633642945806oc');
  await page.getByRole('button', { name: 'Sign In' }).click();
});