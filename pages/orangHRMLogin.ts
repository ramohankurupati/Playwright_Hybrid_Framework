import {expect, Locator, Page}from "@playwright/test"
export class OrangeHRMLoginPage
{
    private page: Page | undefined;
private Username:Locator;
private Password:Locator;
private loginButton:Locator;
private conforMsg:Locator;
private Dashboard:Locator;
private userMenu:Locator;
private LogoutBtn:Locator;
private admin:Locator;
//private searchText:Locator;
private searchBox:Locator;
private searchBtn:Locator;

constructor(page: Page)
{
    this.Username = page.getByRole('textbox', {name: 'Username'})
    this.Password = page.getByRole('textbox', {name: 'Password'})
    this.loginButton = page.getByRole('button', {name: 'Login'})
    this.conforMsg = page.getByTitle('text', {exact:true})
    this.Dashboard = page.locator('//h6[text() ="Dashboard"]')
    this.admin = page.getByRole('link', {name:"Admin"})
    this.searchBox = page.locator('input.oxd-input').nth(1)
    this.searchBtn = page.getByRole('button', {name: 'Search'})
    this.userMenu = page.locator('//p[text() = "manda user"]')
    this.LogoutBtn = page.locator('//a[text()= "Logout"]')


}

public async loginProcess() 
{
    await this.Username.fill('Admin')
    await this.Password.fill('admin123')
    await this.loginButton.click()

}
public async verifyDashboard()
{
await expect(this.Dashboard).toBeVisible()
}

public async searchForUser()
{
    await this.admin.click()
   await this.searchBox.click()
    await this.searchBox.fill('AmalB')
    await this.searchBtn.click()

}
public async performLogout()
{
    await this.userMenu.click()
    await this.LogoutBtn.click()
}



}