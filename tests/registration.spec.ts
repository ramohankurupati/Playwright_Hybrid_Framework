import {expect, test} from '@playwright/test'
import {RegistrationPage} from '../pages/regPage'
import { HomePage } from '../pages/homePage'

test('Regstration @master', async({page})=>{

    page.goto('https://tutorialsninja.com/demo/index.php?route=common/home')
    //await page.waitForTimeout(4000)

let HP = new HomePage(page)
HP.Registration()

    let RP = new RegistrationPage(page)
    await RP.completeRegstration()
    //await page.waitForTimeout(4000)

    let msg = await RP.accountconform()
    console.log(msg);

    expect(msg).toBeTruthy()
    //await page.waitForTimeout(5000)




})