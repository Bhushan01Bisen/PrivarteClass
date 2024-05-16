const xyz=require('./app')
console.log(xyz.w())
// console.log(xyz)

const fs=require('fs')
const http = require('http');
const path = require('path')
const process = require('process')


// =====================================

const colors=require('colors');
const data = require('./data');
const { resolve } = require('path');
const { rejects } = require('assert');
console.log("Node Class".red)
// =====================================

console.log("Welcome");

var a=10;
var b=20;
var c=30;

console.log(a+b+c); 

// =====================================


var arr=[1,2,3,4,5,6,6,6,'6','true']

var demo=arr.filter(a1=>{
    return a1===6
})
console.log(demo)

// =====================================

//1. FileSystem - create next file and add text into that file 

fs.writeFileSync('abc.txt','Hello')
fs.writeFileSync('abc.js','class demo{}')

 console.log('===>',__dirname);

 console.log('===>',__filename);

// =====================================

// 2.http

// http.createServer((req,resp)=>{
// resp.write("<h1>Test</h1>");
// resp.end();
// }).listen(4300)

// go to browser and search for http://localhost:4300/

// or 

// const datacontrol=(req,resp)=>{
//     resp.write("<h1>Optional function</h1>");
// resp.end();
// }
// http.createServer(datacontrol).listen(4500)

// =====================================

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'content-Type':'application/Json'})
//     resp.write(JSON.stringify(data));
// resp.end();
// }).listen(3200)

console.log(process.argv);
console.log(process.argv[2]);
//===========

// const input=process.argv
// // fs.writeFileSync(input[2],input[3])
// console.log(process.argv);
//===========
// if(input[2]=='add'){
// fs.writeFileSync(input[3],input[4])
// }
// else if (input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("invalid input");
// }

// =====================path=====
// const direpath=path.join(__dirname)
// console.log(direpath);
// ===================

// const dirpath=path.join(__dirname,'file')
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirpath+"/hello"+i+".txt","hello")
// }
// ================================

// const dirpath=path.join(__dirname,'crud')
// fs.writeFileSync(`${dirpath}/crud.txt`,'this id crud demo file')

const direpath=path.join(__dirname,'crud')
const filename=`${direpath}/crud.txt`
// fs.writeFileSync(filename,'this is crud demo file')

// fs.appendFile(filename,'This is addition text in crud.txt',(err)=>{
//     if(!err){
//         console.log("file updated");
//     }
// })
// ============================

// fs.appendFile(filename,`$(dirtpath)/test.txt`,(err)=>{
//     if (err){
//         console.log("file name is update!.");
//     }
// })

// ===========================================deleted the crud


// fs.rename(filename,`${direpath}/test.txt`,(err)=>{
//     if(err){
//         console.log("file name is update!.");
//     }
// })


// ==================================================
// to delete the file
// fs.unlinkSync(`${direpath}/test.txt`)
 
// ==============================

// asychronous fuction
// console.log("start  exe")

// setTimeout (()=>{
//     console.log("logic hear...")
// },2000)
// console.log("compike code....")

 var a=10;
// var b=20;
// setTimeout(()=>{
//     b=50;
// },2000
// )
// console.log(a+b)

// ==============================

let promiseexample=new Promise ((resolve,rejects)=>{
    setTimeout(()=>{
        resolve(100)
        // b=60;
    },2000)
})

promiseexample.then((data)=>{
    console.log(a+data);
})
// console.log(a+b);
