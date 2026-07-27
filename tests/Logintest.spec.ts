import {expect, test} from '@playwright/test'
import { DataProvider1 } from '../Utils/dataProvider'
import { HomePage } from '../pages/homePage'
import { LoginPage2 } from '../pages/Logintest'
import { TestConfig } from '../test.config'


const csvPath = 'testData/loginData.csv'
const testData = DataProvider1.getTestDataFromCsv(csvPath)

for(const data of testData)
{
test(`Login Test with CSV Data: ${data.testName}`, async({page})=>{

     await page.goto(TestConfig.appUrl)
               await page.waitForTimeout(5000)

    let hp = new HomePage(page)
   await hp.login()

   let lp = new LoginPage2(page)
   await lp.getEmail2(data.email)
   await lp.getPassword2(data.password)
   await lp.clicklogin2()
   
    await page.waitForLoadState('networkidle') 
       
        if (data.expected.toLowerCase() === 'success') {

        
            await expect(page.getByRole('heading', {name:"My Orders"})).toBeVisible();

        } else {

            const errorMessage = await lp.inValiedLogin();
             expect(errorMessage).toBeTruthy();

        }
   




})


}

