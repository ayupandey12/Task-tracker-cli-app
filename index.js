import path from "node:path";
import * as fs from 'node:fs';

// 1. Correctly build the path relative to the current script file
// 2. Correctly order the callback parameters: (error, data)
// 3. Add 'utf8' encoding to get readable text instead of a binary Buffer

const p1 = path.join(import.meta.dirname, 'app.json');

const data=fs.readFileSync(p1, 'utf8', (error, data) => {
    if (error) {
        // Correct way to throw a standard Error object
        throw new Error("Failed to read file"); 
    }
    return Array(JSON.parse(data));
});
console.log(data);
let array=[];
    if(data!=null||data!="") array.push(data);
    console.log(array.length)
    const size=array.length;
   let id= size>0?array[size-1].id:0;
   const task={
    id:id+1,
    description:"ok now this is new task",
    progress:"todo",
    createdTime:Date.now(),
    updatedTime:Date.now()
}
   array.push(task)
fs.appendFile(p1, JSON.stringify(array) + '\n',(error)=>{
    if(error) throw new error("not appended")
});
