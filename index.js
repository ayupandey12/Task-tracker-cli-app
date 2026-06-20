#!/usr/bin/env node
import path from "node:path";
import * as fs from 'node:fs';


const d=process.argv
const p =path.join(import.meta.dirname,'./ap.json');
const d1=fs.readFileSync(p,'utf8');
const t=JSON.parse(d1);
t[1].ayush=13;
t.push({ayush:20,name:"ok3"})
fs.writeFileSync(p,JSON.stringify(t),'utf8');
console.log(d,p,t)