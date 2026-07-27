import fs from 'fs';
import { parse } from 'csv-parse/sync';
import path from 'path';


export class DataProvider1{

static getTestDataFromJson(filePath:string)
{
    let data:any =JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return data;
}

static getTestDataFromCsv(csvPath:string)
{
    const fileContent = fs.readFileSync(csvPath, 'utf8')
     let data:any= parse(fs.readFileSync(csvPath),{columns:true,skip_empty_lines:true, trim:true});
    return data;
    }
 
/*
    static getTestDataFromCsv(filePath:string)
    {
    const fileContent = fs.readFileSync(filePath, 'utf8')
    let data:any = parse(fs.readFileSync(filePath), {columns:true, skip_empty_lines:true, trim:true})

        return data;
    }
        */
}
