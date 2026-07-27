import { expect, Locator, Page } from "@playwright/test";

export class TestAutuPractice{
private radio:Locator;
private checkboxs:Locator[];
private datePicker:Locator;
private next:Locator;
private alertBtn:Locator;
private conformBtn:Locator;
private drag:Locator;
private drop:Locator;
private mHover:Locator;
private Dclick:Locator;
//private selectday:Locator;
private day:Locator;

constructor(page:Page) 
{
    this.radio = page.getByRole('radio', { name: 'Male', exact: true });
   let allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    this.checkboxs = allDays.map(dayId => page.locator(`#${dayId}`))
    
    this.datePicker = page.locator('#datepicker')
    this.next = page.getByTitle('Next')
    //this.selectday = page.getByRole('link', { name: '28' })
    this.alertBtn = page.getByRole('button', {name:'Simple Alert'})
    this.conformBtn = page.locator("button:has-text('Confirmation Alert')")
    this.drag = page.locator('div#draggable')
    this.drop = page.locator('div#droppable')
    this.mHover = page.locator('button.dropbtn')
    this.Dclick = page.getByRole('button', {name: 'Copy Text'})
    this.day = page.getByRole('link', { name: '31' })
    
}

  public async performCheck(): Promise<void> {
    await this.radio.check();
    expect 
  }

  public async verifyRadioCheck()
  {
    await expect(this.radio).toBeChecked()
  }

 /*  public async verifyDashboard()
{
await expect(this.Dashboard).toBeVisible()
} */

  public async selectDays(): Promise<void> {
    for (const dayCheck of this.checkboxs) {
      await dayCheck.check();
    }
  }


    public async pickdate(): Promise<void>
    {
        await this.datePicker.click()
        await this.next.click();
        await this.day.click()

    }
    public async alertpopup(): Promise<void>
    {
        await this.alertBtn.click()
        await this.conformBtn.click()

    }
   public async mouseHover(): Promise<void>
   {
    await this.mHover.hover()
   }
   public async dragAndDrop()
   {
    await this.drag.dragTo(this.drop)
    
   }
   public async Doubleclick()
   {
    await this.Dclick.dblclick()
   }

}