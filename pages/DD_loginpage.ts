import { Locator, Page } from "@playwright/test";
import { TestConfig } from "../test.config";

export class LoginPage 
{
    private emailID:Locator;
    private password: Locator;
    private loginButton:Locator;
    private loginErrMessage: Locator;
    private headers:Locator;



constructor(page: Page) 
{
this.emailID = page.getByRole('textbox', {name: "E-Mail Address"});
this.password = page.getByRole('textbox', {name:"Password"});

this.loginButton = page.getByRole('button', {name: "Login"});
this.loginErrMessage = page.locator('div.alert');   
this.headers= page.getByRole('heading', {level:2});
}
/* 
//action mothodes
public async Loginprocess():Promise<void>
{
await this.emailID.fill(TestConfig.email1)
await this.password.fill(TestConfig.Password1)
await this.loginButton.click()
//await this.loginErrMessage.isVisible()
}
*/

public async enterEmail(email1: string):Promise<void>
{
    await this.emailID.fill(email1)
}
public async enterPassword(Password1: string):Promise<void>
{
    await this.password.fill(Password1)
}
public async clickLogin():Promise<void>
{
    await this.loginButton.click()
}


public async expectErrMsg() :Promise<boolean>
{
    
    return await this.loginErrMessage.isVisible();
}

public async validateHeaders():Promise<string[]>
{
    return await this.headers.allInnerTexts()
} 


}