const fs = require('fs');
const path = require('path');
const readline= require('readline');


fs.writeFile(path.join(__dirname,'output.txt'),'Hello world Its my world',()=>{});
fs.readFile(path.join(__dirname,'output.txt'),'utf-8',(err,data)=>{
    console.log(data);
    console.log(err)
})
console.log('hello ' +fs.readFileSync(path.join(__dirname,'output11.txt'),'utf-8',))

//Used in project

let rl = readline.createInterface({input:fs.createReadStream('./output.txt')});
console.log(rl);
rl.on('line',(rawline)=>{console.log(rawline)})
rl.on('close',()=>{})