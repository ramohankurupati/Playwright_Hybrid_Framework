import { Locator, Page } from "@playwright/test";
import {RandomData} from '../Utils/randomDataGenerator'

export class RegistrationPage
{
    private firstName:Locator;
    private lastName:Locator;
    private EmailId:Locator;
    private Telephone:Locator;
    private Password:Locator;
    private Password2:Locator;
    private radio:Locator;
    private checkbox:Locator;
    private continueBtn:Locator;
    private confirmMsg:Locator;

    constructor(page: Page)
    {
this.firstName = page.locator('#input-firstname')
this.lastName = page.locator('#input-lastname')
this.EmailId = page.locator('#input-email')
this.Telephone = page.locator('#input-telephone')

this.Password = page.locator('#input-password')
this.Password2 = page.locator('#input-confirm')
this.radio = page.getByRole('radio', {name: 'Yes'})
this.checkbox = page.locator('//input[@type="checkbox"]')
this.continueBtn = page.getByRole('button', { name:'Continue'})
this.confirmMsg = page.getByText('Your Account Has Been Created!')

    }

    //action methodes

    public async completeRegstration():Promise<void>
    {
        await this.firstName.fill(RandomData.getFirstName())
        await this.lastName.fill(RandomData.getLastName())
        //await this.fullname(`${this.firstName} ${this.lastName}`)
        //await this.fullname('this.firstName + this.lastName')
        await this.EmailId.fill(RandomData.getEmailId())
        await this.Telephone.fill(RandomData.getTelephone())
        let pwd = RandomData.getPassword()
        await this.Password.fill(pwd)
        await this.Password2.fill(pwd)
        await this.radio.check()
        await this.checkbox.check()
        await this.continueBtn.click()

    }


    public async accountconform(): Promise<boolean>
    {
        return await this.confirmMsg.isVisible()
        
    }



}