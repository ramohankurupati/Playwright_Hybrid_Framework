# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_05_searchPositive.spec.ts >> TC_05_SearchProduct_Positive @master, @sanity
- Location: tests\TC_05_searchPositive.spec.ts:5:1

# Error details

```
Error: page.goto: url: expected string, got undefined
```

# Test source

```ts
  1  | import {expect, test} from '@playwright/test'
  2  | import { TestConfig } from '../test.config'
  3  | import { SearchPage } from '../pages/searchPage';
  4  | 
  5  | test('TC_05_SearchProduct_Positive @master, @sanity', async({page})=>{
> 6  | await page.goto(TestConfig.appUrl);
     |            ^ Error: page.goto: url: expected string, got undefined
  7  | 
  8  | const sp = new SearchPage(page);
  9  | await sp.searchProduct('macbook')
  10 | await sp.clickSearch()
  11 | 
  12 | const isproductvisible = await sp.validatesearch('macbook');
  13 | expect(isproductvisible).toBeTruthy()
  14 | 
  15 | 
  16 | await page.waitForTimeout(4000)
  17 | })
```