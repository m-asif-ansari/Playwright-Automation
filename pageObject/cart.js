exports.CartProcess = class CartProcess {

    constructor(page) {
        this.page = page;
        this.email = page.getByRole('textbox', { name: 'Email' })
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = this.page.getByRole('button', { name: 'Log in' });
    }

    async goto(){
        await this.page.goto('https://demowebshop.tricentis.com/');
    }
    
    async loginMethod(email, password) {
        await this.email.fill(email)
        await this.password.fill(password)
        await this.loginButton.click()
    }
}