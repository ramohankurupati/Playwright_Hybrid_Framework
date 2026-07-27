import {expect, Locator, Page, test} from '@playwright/test'
import { Faker } from '@faker-js/faker';
import { RandomData } from '../Utils/randomDataGenerator';

export class InternetHeroku
{
private userName:Locator;
private Password:Locator;
private login:Locator;
private logout:Locator;
private conformation:Locator;
private invalidmsg:Locator;

constructor(page:Page)
{
    this.userName = page.getByRole('textbox', {name: "Username", exact:true})
    this.Password = page.getByRole('textbox', {name: "Password", exact:true})
    this.login = page.locator('//i[text() = " Login"]')
    this.logout = page.locator('//i[text() = " Logout"]')
    this.conformation = page.locator('//h2[text() = " Secure Area"]')
    this.invalidmsg = page.locator('#flash')
}
public async invaliedLoginProcess():Promise<void>
{
    await this.userName.fill(RandomData.getFirstName())
    await this.Password.fill(RandomData.getPassword())
    await this.login.click()

}
public async inValidloginvalied()
{
   let iMsg = await expect(this.invalidmsg).toBeVisible()
   console.log(iMsg);
}

public async LoginProcess():Promise<void>
{
    await this.userName.fill('tomsmith')
    await this.Password.fill('SuperSecretPassword!')
    await this.login.click()

}

public async loginValidation()
{
   let VMsg = await expect(this.conformation).toBeVisible()
   console.log(VMsg);
}

public async logoutProcess():Promise<void>
{
    await this.logout.click()
}

}