import { LocationModule } from '@faker-js/faker'
import {Locator, Page, test} from '@playwright/test'
export class HomePage{

    private myaccount:Locator;
    private LoginPage:Locator;
    private RegistrationPage:Locator;

    constructor(page: Page)
    {
        this.myaccount = page.locator(`//span[text() = 'My Account']`)
        this.RegistrationPage = page.getByRole('link', {name: "Register"})
        this.LoginPage = page.getByRole('link', {name:"Login"})

    }

    public async Registration()
    {
        await this.myaccount.click()
        await this.RegistrationPage.click()

    }
    public async login()
    {
        await this.myaccount.click()
        await this.LoginPage.click()
    }
}