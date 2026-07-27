import { expect, Locator, Page } from "@playwright/test";


export class LoginPage2
{
[x: string]: any;
private emailId2:Locator;
private Password2:Locator;
private loginBtn2:Locator;
private Success2:Locator;
private Failure2:Locator;

constructor(page:Page)
{
    this.emailId2 = page.getByRole('textbox', {name: "E-Mail Address"})
    this.Password2 = page.getByRole('textbox', {name: "Password"})
    this.loginBtn2 = page.getByRole('button', {name:"Login"})
    this.Success2= page.getByRole('heading', {name:"My Orders"})
    this.Failure2= page.getByText('Warning')
}

//acction methods 

public async getEmail2(email:string) // email --> it should match the name in loginData.csv 
// file under testData
{
    await this.emailId2.fill(email)
}
public async getPassword2(password:string)// Password --> it should match the name in loginData.csv
// file under testData
{
    await this.Password2.fill(password)
}
public async clicklogin2()
{
    await this.loginBtn2.click()
}

public async validLogin()
{
    return await this.Success2.innerText()
}

public async inValidLogin()
{
    return await this.Failure2.isVisible()
}





}