import path from "node:path";
import * as fs from 'node:fs';

// 1. Correctly build the path relative to the current script file
const p = path.join(import.meta.dirname, 'ap.json');

// 2. Correctly order the callback parameters: (error, data)
// 3. Add 'utf8' encoding to get readable text instead of a binary Buffer
fs.readFile(p, 'utf8', (error, data) => {
    if (error) {
        // Correct way to throw a standard Error object
        throw new Error("Failed to read file"); 
    }
    console.log(JSON.parse(data).ayush);
});
const p1 = path.join(import.meta.dirname, 'app.json');
const oknowauio = { status: "success", timestamp: Date.now() };
fs.appendFile(p1, JSON.stringify(oknowauio) + '\n',(error)=>{
    if(error) throw new error("not appended")
});
