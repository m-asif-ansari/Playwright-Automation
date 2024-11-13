exports.RegisterPage = class RegisterPage {
  constructor(page) {
    this.page = page;

    this.malegender = page.getByLabel("Male", { exact: true });
    this.femalegender = page.getByLabel("Female", { exact: true });
    this.firstName = page.getByRole("textbox", { name: "First name" });
    this.lastName = page.getByRole("textbox", { name: "Last name" });
    this.email = page.getByRole("textbox", { name: "Email" });
    this.password1 = page.getByRole("textbox", { name: "Password" }).first();
    this.password2 = page.getByRole("textbox", { name: "Password" }).last();
  }

  async goto() {
    await this.page.goto("https://demowebshop.tricentis.com/");
  }

  async submitRegisterForm() {
    await this.page.getByRole("button", { name: "Register" }).click();
  }

  async gotoRegister() {
    await this.page.getByRole("link", { name: "Register" }).click();
  }

  async fillEmail(email) {
    await this.page.getByRole("textbox", { name: "Email" }).fill(email);
  }

  async fillPassword(password) {
    await this.page
      .getByRole("textbox", { name: "Password" })
      .first()
      .fill(password);
  }
  async fillConfirmPassword(password) {
    await this.page
      .getByRole("textbox", { name: "Password" })
      .last()
      .fill(password);
  }

  async registerMethod(
    gender,
    firstName,
    lastName,
    email,
    password1,
    password2
  ) {
    if (gender.lower == "male") {
      await this.malegender.check();
    } else {
      await this.femalegender.check();
    }
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.password1.fill(password1);
    await this.password2.fill(password2);
  }
};
