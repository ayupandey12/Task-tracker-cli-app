#!/usr/bin/env node
import path from "node:path";
import * as fs from 'node:fs';


const d=process.argv
const p =path.join(import.meta.dirname,'./app.json');

console.log(d,p)