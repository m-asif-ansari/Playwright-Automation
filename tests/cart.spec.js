import { test, expect } from "@playwright/test";
import { CartProcess } from "../pageObject/cart";

test("Ordering Product", async ({ page }) => {
  const cart = new CartProcess(page);
  await cart.goto();
  await cart.loginNav();
  await cart.loginMethod("asif.testing@gmail.com", "123456");

  await expect(page.getByText("Welcome to our store")).toBeVisible();

  await cart.searchItem("Computer");
  await cart.openItem("Build your own cheap computer");
  await cart.addToCart();
  await cart.gotoShoppingCart();
  await cart.fillCountry("41");
  await cart.fillState("0");
  await cart.fillPinCode("110013");
  await cart.checkTNC();
  await cart.checkout();

  await cart.addnewAddress();

  await cart.fillCountry("41");
  await cart.fillState("0");
  await cart.fillCity("New Delhi");
  await cart.fillAddress("NZM");
  await cart.fillPinCode("110013");
  await cart.fillPhone("1029387465");

  await cart.continueBooking();
  await page.waitForTimeout(1000);

  await cart.continueBooking();

  await cart.deliveryType("Next Day Air");

  await cart.continueBooking();

  await cart.paymentType("Cash on Delivery");

  await cart.continueBooking();
  await expect(page.getByText("You will pay by COD")).toBeVisible();

  await cart.continueBooking();

  await cart.confirmBooking();

  await expect(
    page.getByText("Your order has been successfully processed!")
  ).toBeVisible();

  await expect(page.getByText("Order number")).toBeVisible();
  const ordernumber = (await page.getByText("Order number").innerText()).trim();
  console.log(ordernumber);

  await cart.continueBooking();
});
