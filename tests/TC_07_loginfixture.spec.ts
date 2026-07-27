
import { expect, test } from '../fixtures/loginfixture'
import { TestConfig } from '../test.config'



test('Invalid login test', async({page, homePage, loginPage})=>{
    await page.goto(TestConfig.appUrl);
    //await let  hp = new HomePage(page)
    
    //await hp.login()
    await homePage.login();

    await loginPage.enterEmail('wrong@gmail.com');
    await loginPage.enterPassword('wrong@gmail.com');
    await loginPage.clickLogin();
    const errorMessage = await loginPage.expectErrMsg();
    expect(errorMessage).toBeTruthy();

    


})
