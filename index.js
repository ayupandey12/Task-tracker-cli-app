#!/usr/bin/env node
import path from "node:path";
import * as fs from 'node:fs';

const p =path.join(import.meta.dirname,'./ap.json');
const d1=fs.readFileSync(p,'utf8');
const todos=d1?JSON.parse(d1):[];

function addtodo({todo}) //add todo
{ const size=todos.length;
  const preid=size>0?todos[size-1].id:0;
  const newtodo={
    id:preid+1,
    description:todo,
    progress:"todo",
    createdAt:Date.now(),
    updatedAt:Date.now()
  }
  todos.push(newtodo);
}
function updatetodo({newtodo,id})//update todo
{
  todos.forEach(t => {
     if(t.id===id)
     {
        t.description=newtodo;
     }
  });
}
function deletetodo({id})
{ const i=todos.filter((t)=>{return t.id!==id});
  todos.length=0;
  todos.push(...i); 
}
function updateprogress({id,progress})
{
 const u=todos.filter((t)=>{return t.id===id});
 if(u.length===0)
 {
    console.log("id not found");
    return ;
 }
 if(progress==="mark-inprogress")
 {
    u[0].progress="inprogress";
 }
 else u[0].progress="done";
}
function findlist({findwithprogress})
{ 
 if(findwithprogress==="") 
 {
   console.log(todos);
 }
 else {
    const u=todos.filter((t)=>{return t.progress===findwithprogress})
    console.log(u);
    
 }

}
const d=process.argv.filter((i)=>{return !i.startsWith('C')})
const f=d[0];
const workon=d[1]||"";
const v=d[2]||"";
switch (f) {
    case "add":
        if(workon=="") {
            console.log("invalid todo input")
            break;
        }
        addtodo({todo:workon});
        break;
    case "update":
        if(v==""||workon=="")
        {
            console.log("invalid update values")
            break;
        }
        updatetodo({newtodo:v,id:Number(workon)});
        break;
    case "delete":
        if(workon=="")
        {
            console.log("invalid delete credentials");
            break;
        }
        deletetodo({id:Number(workon)});
        break;
    case "mark-inprogress":
    case "mark-done":
        if(workon=="") 
        {
            console.log("invalid id ");
            break;
        }
        updateprogress({id:Number(workon),progress:f});
        break;
    case "list":
        {
           findlist({findwithprogress:workon})
        }
    default:
        break;
}
fs.writeFileSync(p,JSON.stringify(todos),'utf8');