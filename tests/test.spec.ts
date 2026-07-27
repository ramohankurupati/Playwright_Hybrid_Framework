import {Page, test} from '@playwright/test'
test.fixme('multiple pages', async ({context})=>{
  
    let P1 = await context.newPage()
    let P2 = await context.newPage()
   await P1.goto(`https://tutorialsninja.com/demo/`)
    await P2.goto('https://www.google.com/')


    await P1.waitForTimeout(8000)
    await P2.waitForTimeout(8000)

})