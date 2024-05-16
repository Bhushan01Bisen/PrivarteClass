const express=require('express')
require('./config-mongoose')

const product=require('./productSchema')

const app=express()

app.post('/create',(req,res)=>{
    res.send("Done")
})
app.listen(4500)