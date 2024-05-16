const express=require('express')
const app=express()
const path=require('path')
const ejs=require('ejs')

const dirpath=path.join(__dirname,'public')
app.set('view engine','ejs')

// console.log(dirtpath);

// app.use(express.static('public'))

// app.use(express.static('public'))

app.get ('/home',(_,resp)=>{
    resp.sendFile(`${dirtpath}/home.html`)
})

app.get('/about',(_,resp)=>{
    resp.sendFile(`${dirpath}/about.html`)


})


app.get('/data',(_,resp)=>{
    const user={
        name:'Test',
        email:'test@gmail.com',
        mobileNo:23477474,
        country:'India',
        skills:['React','Angular','Node','Js','Mongoo']
    }
    resp.render('data',{user})
})
app.get('/login',(_,resp)=>{
    resp.render('login')
})

// app.route('/demo').get((req,res))

app.get('*',(_,resp)=>{
    resp.sendFile(`${dirpath}/page-not-found.html`)
})

app.listen(3400)

