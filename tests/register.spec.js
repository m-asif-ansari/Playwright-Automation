import { test, expect } from "@playwright/test";
import { RegisterPage } from "../pageObject/register";

test.beforeEach("Before Test", async ({ page }) => {
  const reg = new RegisterPage(page);
  await reg.goto();
  await expect(page).toHaveTitle(/Demo Web Shop/);
});

test("Empty Form Validation", async ({ page }) => {
  const reg = new RegisterPage(page);
  reg.gotoRegister();
  // await page.getByRole("link", { name: "Register" }).click();
  reg.submitRegisterForm();
  // await page.getByRole("button", { name: "Register" }).click();

  await expect(page.getByText("First name is required.")).toBeVisible();
  await expect(page.getByText("Last name is required.")).toBeVisible();
  await expect(page.getByText("Email is required.")).toBeVisible();
  await expect(page.getByText("Password is required.").first()).toBeVisible();
  await expect(page.getByText("Password is required.").last()).toBeVisible();
});

test("Email Validation", async ({ page }) => {
  const reg = new RegisterPage(page);
  reg.gotoRegister();
  // await page.getByRole("link", { name: "Register" }).click();
  reg.fillEmail("emailwithoutatsymbol");
  // await page.getByRole("textbox", { name: "Email" }).fill("email");
  reg.submitRegisterForm();
  // await page.getByRole("button", { name: "Register" }).click();
  await expect(page.getByText("Wrong email")).toBeVisible();
});

test("Password Validation", async ({ page }) => {
  const reg = new RegisterPage(page);
  reg.gotoRegister();
  // await page.getByRole("link", { name: "Register" }).click();
  reg.fillPassword("12345");
  // await page.getByRole("textbox", { name: "Password" }).first().fill("12345");
  reg.submitRegisterForm();
  // await page.getByRole("button", { name: "Register" }).click();
  await expect(
    page.getByText("The password should have at least 6 characters.")
  ).toBeVisible();
});

test("Confirm Password Validation", async ({ page }) => {
  const reg = new RegisterPage(page);
  reg.gotoRegister();
  // await page.getByRole("link", { name: "Register" }).click();
  reg.fillPassword("123456");
  // await page.getByRole("textbox", { name: "Password" }).first().fill("123456");
  reg.fillConfirmPassword("123");
  // await page.getByRole("textbox", { name: "Password" }).last().fill("123");
  reg.submitRegisterForm();
  // await page.getByRole("button", { name: "Register" }).click();
  await expect(
    page.getByText("The password and confirmation password do not match.")
  ).toBeVisible();
});

test("Register", async ({ page }) => {
  const reg = new RegisterPage(page);
  reg.goto();
  await page.getByRole("link", { name: "Register" }).click();

  const gender = "male";
  const firstName = "Asif";
  const lastName = "Testing";
  const email = "qwe1231231233@gmail.com";
  const password1 = "123456";
  const password2 = "123456";

  await reg.registerMethod(
    gender,
    firstName,
    lastName,
    email,
    password1,
    password2
  );

  await page.getByRole("button", { name: "Register" }).click();

  await expect(page.getByText("Your registration completed")).toBeVisible();
});
