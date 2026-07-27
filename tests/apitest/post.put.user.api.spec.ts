import {test} from '@playwright/test'
import { request } from 'node:http';

let AUTH_TOKEN = {authorization: 'Bearer bb5fcb2b5c70c5d67e152fb5e9e2907680012212d35c43e0fe6fd7482a2b253a'};


test.skip('create_a_user_test', async({request})=>{

    let userData = {
        name: "Ramamohan",
        email: `automation_${Date.now()}@open.com`,
        gender: "male",
        status: "active"
    }

    let response = await request.post('https://gorest.co.in/public/v2/users/',{
        headers: AUTH_TOKEN,
        data: userData

    });

    let jsonBody = await response.json();
    console.log(jsonBody);
    console.log(response.status());
    console.log(response.statusText());

});
test('Update_a_user_test', async ({request})=>{

let userData = {
    name: "ramohan",
    email: `automation_${Date.now()}@open.com`,
    gender:"male",
    status:"Inactive"

}
let response = await request.put('https://gorest.co.in//public/v2/users/8557426', {
    headers:AUTH_TOKEN,
    data:userData
});
let jsonBody = await response.json();
    console.log(jsonBody);
    console.log(response.status());
    console.log(response.statusText());


})