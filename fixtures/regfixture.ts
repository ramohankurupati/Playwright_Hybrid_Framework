import {test as base, expect} from '@playwright/test'
import { HomePage } from '../pages/homePage'
import {RegistrationPage} from '../pages/regPage'

type MyFixture2 = {
    homePage:HomePage;
    regPage:RegistrationPage
};
export const test = base.extend<MyFixture2>({
homePage:async({page}, use)=>{
    await use(new HomePage(page))
},
regPage:async({page}, use)=>{
    await use(new RegistrationPage(page))
}
});

export {expect};
