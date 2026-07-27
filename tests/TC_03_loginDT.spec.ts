/* import { HomePage } from '../pages/homePage';

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/DD_loginpage';
import { DataProvider1 } from '../Utils/dataProvider';
import { TestConfig } from '../test.config';


// Load CSV test data
const csvPath = "testData/loginData.csv";
const testData = DataProvider1.getTestDataFromCsv(csvPath);

//This code reads login data (email, password, expected result) from a CSV file and stores it in testData.
//  Then, it loops through each row and runs the same login test multiple times with different data (data-driven testing).
//  For each row, it opens the website, performs login using the given credentials, and checks the result. 
// If login is expected to succeed, it verifies the “My Account” page is visible; otherwise, it checks for an error message.

for (const data of testData) {

    test(`Login Test with CSV Data: ${data.testName}`, async ({ page }) => {

         await page.goto(TestConfig.appUrl)
           await page.waitForTimeout(5000)
           
       let hp = new HomePage(page);
        await hp.login()

       
           let lp = new LoginPage(page);
      await lp.enterEmail(data.email)
      await lp.enterPassword(data.password)
      await lp.clickLogin()


         await page.waitForLoadState('networkidle') 
         //waits until all network requests (like API calls, images, scripts) are finished and the page becomes idle.
         //  It helps ensure the page is fully loaded before performing assertions.
         //  This is useful after actions like login or navigation in dynamic applications. 

        if (data.expected.toLowerCase() === 'success') {

        
            await expect(page.locator('#content').getByRole('heading', { name: 'My Account' })).toBeVisible();

        } else {

            const errorMessage = await lp.expectErrMsg();
             expect(errorMessage).toBeTruthy();

        }
    });

} */


    import { HomePage } from '../pages/homePage'; 
import { expect, test } from '../fixtures/loginfixture'; 
import { DataProvider1 } from '../Utils/dataProvider'; 
import { TestConfig } from '../test.config'; 

// Load CSV test data 

// using fixtures
const csvPath = "testData/loginData.csv"; 
const testData = DataProvider1.getTestDataFromCsv(csvPath); 

// Loop through each row of the CSV data
// Added 'index' to the loop to ensure every test title is completely unique
for (const [index, data] of testData.entries()) {

  test(`Login Test with CSV Data: ${data.testName} (Row ${index + 1}) @master, @sanity`, async ({ page, homePage, loginPage }) => {
    
    // 1. Navigate to the application URL
    await page.goto(TestConfig.appUrl); 
    
    // 2. Click the login/account button using your homePage fixture
    await homePage.login(); 
    
    // 3. Enter dynamic credentials directly from the CSV row data
    await loginPage.enterEmail(data.email); 
    await loginPage.enterPassword(data.password); 
    await loginPage.clickLogin(); 
    
    // 4. Wait for network requests to settle down
    await page.waitForLoadState('networkidle');

    // 5. Conditional assertions based on your expected CSV outcome
    if (data.expected.toLowerCase() === 'success') {
      await expect(page.locator('#content').getByRole('heading', { name: 'My Account' })).toBeVisible(); 
    } else {
      const errorMessage = await loginPage.expectErrMsg(); 
      expect(errorMessage).toBeTruthy(); 
    }
  }); 
}