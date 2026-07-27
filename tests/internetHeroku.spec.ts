import {test} from '@playwright/test'
import {InternetHeroku} from '../pages/internetHeroku'
test('InternetHerokuLogin', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login')

    let IH = new InternetHeroku(page)
    await IH.invaliedLoginProcess()
    await IH.inValidloginvalied()
    await IH.LoginProcess()
    await IH.loginValidation()
    await  IH.logoutProcess()

})