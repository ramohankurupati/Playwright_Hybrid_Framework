import {expect, test} from '@playwright/test'
import { TestConfig } from '../test.config'
import { DataProvider1 } from '../Utils/dataProvider';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/DD_loginpage';

const jsonPath= "testdata/loginData.json";
const jsonTestData = DataProvider1.getTestDataFromJson(jsonPath);



for(const data of jsonTestData)
{
    test(`login test with json data: ${data.testName} @master, @datadriven, @regression`, async({page})=>{
await page.goto(TestConfig.appUrl)
await page.waitForTimeout(3000)
let hp= new HomePage(page)
await hp.login()

let lp = new LoginPage(page)
await lp.enterEmail(data.email)
await lp.enterPassword(data.password)
await lp.clickLogin()

if(data.expected.toLowerCase() === 'success')
{
    await expect(page.locator('#content').getByRole('heading', {name: 'My Account'})).toBeVisible();

}
else{
    const errorMesage = await lp.expectErrMsg();
    expect(errorMesage).toBeTruthy()
}

})

}