import {expect, test} from '@playwright/test'

let AUTH_TOKEN = {Authorization: 'Bearer bb5fcb2b5c70c5d67e152fb5e9e2907680012212d35c43e0fe6fd7482a2b253a'};




test('user_api_test', async({request})=>{

    let response = await request.get('https://gorest.co.in/public/v2/users',{
    headers:AUTH_TOKEN
})


let jsonBody = await response.json();
//console.log(jsonBody);
console.log(response.status());
console.log(response.statusText());
expect(response.status()).toBe(200); 
});