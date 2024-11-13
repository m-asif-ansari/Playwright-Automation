const { count } = require("console");

exports.CartProcess = class CartProcess {
  constructor(page) {
    this.page = page;
    this.email = page.getByRole("textbox", { name: "Email" });
    this.password = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Log in" });
    this.searchBox = page.locator("#small-searchterms");
    this.shoppingCart = page
      .getByRole("link", { name: "Shopping cart" })
      .first();
    this.addToCartButton = page
      .getByRole("button", { name: "Add to Cart" })
      .first();
    this.tnc = page.locator("#termsofservice");
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
    this.country = page.getByRole("combobox", { name: "Country:" });
    this.state = page.getByRole("combobox", { name: "State / province:" });

    this.city = page.getByRole("textbox", { name: "City:" });
    this.pincode = page.getByRole("textbox", { name: "Zip / postal code:" });
    this.phoneNumber = page.getByRole("textbox", { name: "Phone number:" });
    this.address = page.getByRole("textbox", { name: "Address 1:" });
    this.continueButton = page.getByRole("button", {
      name: "Continue",
      exact: true,
    });
    this.confirmbutton = page.getByRole("button", {
      name: "Confirm",
      exact: true,
    });
  }

  async goto() {
    await this.page.goto("https://demowebshop.tricentis.com/");
  }

  async loginMethod(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
  }
  async loginNav() {
    await this.page.getByRole("link", { name: "Log in" }).click();
  }

  async searchItem(item) {
    await this.searchBox.fill(item);
    await this.page.getByRole("button", { name: "Search" }).click();
  }

  async openItem(item) {
    await this.page.getByRole("link", { name: `${item}`, exact: true }).click();
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async gotoShoppingCart() {
    await this.shoppingCart.click();
  }

  async checkTNC() {
    await this.tnc.click();
  }
  async fillCountry(country) {
    await this.country.selectOption({ value: `${country}` });
  }

  async fillState(state) {
    await this.state.selectOption({ value: `${state}` });
  }

  async fillCity(city) {
    await this.city.fill(city);
  }

  async fillAddress(address) {
    await this.address.fill(address);
  }
  async fillPinCode(pin) {
    await this.pincode.fill(pin);
  }
  async fillPhone(phone) {
    await this.phoneNumber.fill(phone);
  }

  async checkout() {
    await this.checkoutButton.click();
  }

  async addnewAddress() {
    await this.page
      .getByRole("combobox", {
        name: "Select a billing address from your address book or enter a new address.",
      })
      .selectOption({ label: "New Address" });
  }

  async continueBooking() {
    await this.continueButton.click();
  }
  async confirmBooking() {
    await this.confirmbutton.click();
  }

  async deliveryType(deliveryMode) {
    await this.page.getByLabel(`${deliveryMode}`).check();
  }

  async paymentType(paymentMode) {
    await this.page.getByLabel(`${paymentMode}`).check();
  }
};
