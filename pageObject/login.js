exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.email = page.getByRole('textbox', { name: 'Email' })
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = this.page.getByRole('button', { name: 'Log in' });

        this.bookLink = page.getByRole('link', { name: 'Books' }).last()
        this.computerLink = page.getByRole('link', { name: 'Computers' }).last()
        this.electronicLink = page.getByRole('link', { name: 'Electronics' }).last()
        this.apparelLink = page.getByRole('link', { name: 'Apparel & Shoes' }).last()
        this.digitalLink = page.getByRole('link', { name: 'Digital downloads' }).last()
        this.jewelryLink = page.getByRole('link', { name: 'Jewelry' }).last()
        this.giftLink = page.getByRole('link', { name: 'Gift Cards' }).last()
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