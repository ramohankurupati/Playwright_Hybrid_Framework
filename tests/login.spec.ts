import {expect, test} from '@playwright/test'
import {LoginPage } from '../pages/loginPage'
import { HomePage } from '../pages/homePage'
import { TestConfig } from '../test.config'

test('loginPage', async({page})=>{
await  page.goto(TestConfig.appUrl)
    await page.waitForTimeout(4000)

let HP = new HomePage(page)
await HP.login()


let LP = new LoginPage (page)
await LP.enterEmail(TestConfig.email1)
await LP.enterPassword(TestConfig.Password1)
await LP.clickLogin()
await page.waitForTimeout(2000)

let Err = await LP.expectErrMsg()
console.log(Err);
//expect(Err).toBeTruthy();
 
let heades = await LP.validateHeaders()
 expect(heades).toHaveLength(4)
expect(heades).toEqual(['My Account', 'My Orders', 'My Affiliate Account', 'Newsletter']);
});