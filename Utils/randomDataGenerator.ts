import { faker } from "@faker-js/faker";
export class RandomData
{
    static getFirstName():string
    {
        return faker.person.firstName()
    }

    static getLastName():string
    {
        return faker.person.lastName()
    }

    static getEmailId():string
    {
        return faker.internet.email()
    }
    static getTelephone(length:Number =10):string
    {
        return faker.phone.number()
    }
    static getPassword():string
    {
        return faker.internet.password()
    }
    
}