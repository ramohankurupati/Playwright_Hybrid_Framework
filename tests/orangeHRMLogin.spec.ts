import {test} from'@playwright/test'
import {OrangeHRMLoginPage} from '../pages/orangHRMLogin'

test('OrangeHRMLogin', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/')
    let OLP= new OrangeHRMLoginPage(page)
    await OLP.loginProcess()
    

    await OLP.verifyDashboard()
    

    await OLP.searchForUser()
    

    await OLP.performLogout()
    await page.waitForTimeout(4000)

})