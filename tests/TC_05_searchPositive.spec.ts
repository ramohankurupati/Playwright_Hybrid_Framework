import {expect, test} from '@playwright/test'
import { TestConfig } from '../test.config'
import { SearchPage } from '../pages/searchPage';

test('TC_05_SearchProduct_Positive @master, @sanity', async({page})=>{
await page.goto(TestConfig.appUrl);

const sp = new SearchPage(page);
await sp.searchProduct('macbook')
await sp.clickSearch()

const isproductvisible = await sp.validatesearch('macbook');
expect(isproductvisible).toBeTruthy()


await page.waitForTimeout(4000)
})