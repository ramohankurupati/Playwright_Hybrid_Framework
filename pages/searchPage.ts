import {Locator, Page} from '@playwright/test';

export class SearchPage
{
 
  private page: Page; // Changed from any to Page for type safety
  private searchBox: Locator;
  private searchBtn: Locator;

    constructor(page:Page) 
    {
        this.page = page
this.searchBox = page.getByRole('textbox', {name:'Search'})
this.searchBtn = page.locator('//span//button[@type="button"]')

    }
public async searchProduct(sager:string): Promise<void>
{
    await this.searchBox.fill(sager)
}
public async clickSearch(): Promise<void>
{
    await this.searchBtn.click()
}
public async validatesearch(ProductName:string): Promise<boolean>
{
    return await this.page.getByText(`Search - ${ProductName}`).isVisible();
}

}