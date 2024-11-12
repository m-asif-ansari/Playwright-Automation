import { test, expect } from '@playwright/test';

import { CartProcess } from '../pageObject/cart';

test('Ordering Product', async ({ page }) => {
  const cart = new CartProcess(page)
  cart.goto()
  await page.getByRole('link', { name: 'Log in' }).click();

  await cart.loginMethod('asif.testing@gmail.com', '123456')
  await expect(page.getByText('Welcome to our store')).toBeVisible();

  // await page.goto('https://demowebshop.tricentis.com/ ');
  // await expect(page).toHaveTitle(/Demo Web Shop/);
 
  // await page.getByRole('textbox', { name: 'Email'}).fill("asif.testing@gmail.com")
  // await page.getByRole('textbox', { name: 'Password'}).fill("123456")
 
  // await page.getByRole('button', { name: 'Log in' }).click();

  await page.locator('#small-searchterms').fill('Computer')
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Build your own cheap computer', exact: true  }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();
  await page.getByRole('link', { name: 'Shopping cart' }).first().click();
  await page.locator('#termsofservice').click()
  await page.getByRole('button', { name: 'Checkout' }).click();
  await expect(page.getByRole('heading', { name: 'Shopping cart' })).toBeVisible();

  






})