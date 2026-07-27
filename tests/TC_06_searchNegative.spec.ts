/* import {expect, test} from '@playwright/test'
import { TestConfig } from '../test.config'
import { SearchPage } from '../pages/searchPage';

test('TC_05_SearchProduct_Positive', async({page})=>{
    page.waitForTimeout(3000)
await page.goto(TestConfig.appUrl);

const sp = new SearchPage(page);
await sp.searchProduct('invalidProduct123')
await sp.clickSearch()



await page.waitForTimeout(4000)
}) */
import {expect, test} from '@playwright/test'
import { TestConfig } from '../test.config'
import { SearchPage } from '../pages/searchPage';

test('TC_05_SearchProduct_Positive @master, @regression', async({page})=>{
await page.goto(TestConfig.appUrl);

const sp = new SearchPage(page);
await sp.searchProduct('invalidProduct123')
await sp.clickSearch()

const isproductvisible = await sp.validatesearch('invalidProduct123');
expect(isproductvisible).toBeTruthy()


await page.waitForTimeout(3000)
})