import {test} from '@playwright/test'
import { request } from 'node:http';

let AUTH_TOKEN = {authorization: 'Bearer bb5fcb2b5c70c5d67e152fb5e9e2907680012212d35c43e0fe6fd7482a2b253a'};

test('delete_user_test', async({request})=>{
let Response =  await request.delete('https://gorest.co.in/public/v2/users/8557426', {
    headers:AUTH_TOKEN
});
console.log(Response.status());
console.log(Response.statusText());

})