import {expect, test} from '@playwright/test'
import {TestAutuPractice} from '../pages/testAutoPrct'

test('testAutoPractice', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    let P = new TestAutuPractice(page)
    await P.performCheck()
    await P.verifyRadioCheck()
    await P.pickdate()
    
    await P.alertpopup()
    await P.mouseHover()

    await P.dragAndDrop()
    await P.Doubleclick()

    


})