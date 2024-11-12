import { test, expect } from '@playwright/test';

import { LoginPage } from '../pageObject/login';

test.beforeEach("Before Test", async ({ page }) => {
  const log1 = new LoginPage(page);
  await log1.goto();
  await expect(page).toHaveTitle(/Demo Web Shop/);
});

test('Empty Form Validation', async ({ page }) => {
  const log1 = new LoginPage(page)
  await page.getByRole('link', { name: 'Log in' }).click();  
  await expect(page.getByText('Welcome, Please Sign In!')).toBeVisible();
  await log1.loginMethod("","")
  await expect(page.getByText('Login was unsuccessful. Please correct the errors and try again. No customer account found')).toBeVisible();
});

test('Links Validation', async ({ page }) => {
    const log1 = new LoginPage(page)
    await page.getByRole('link', { name: 'Log in' }).click();
    // Validating the Heading
    await expect(page.getByText('Welcome, Please Sign In!')).toBeVisible();
    // Validating the 7 Active links
    await expect(log1.bookLink).toBeEnabled()
    await expect(log1.computerLink).toBeEnabled()
    await expect(log1.electronicLink).toBeEnabled()
    await expect(log1.apparelLink).toBeEnabled()
    await expect(log1.digitalLink).toBeEnabled()
    await expect(log1.jewelryLink).toBeEnabled()
    await expect(log1.giftLink).toBeEnabled()
});

test('Login', async ({ page }) => {
  const log2 = new LoginPage(page) 
  await page.getByRole('link', { name: 'Log in' }).click();
  await log2.loginMethod('asif.testing@gmail.com', '123456')
  await expect(page.getByText('Welcome to our store')).toBeVisible();
})








 