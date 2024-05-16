const express=require('express');
const app= express();
const {notFound,errorHandler}=require("./middlewares/errorHandler")
const dbConnect=require('./config/dbConnect');
const dotenv=require("dotenv").config();
const PORT=process.env.PORT || 5000;
const authRouter=require('./routes/authRoutes');
const bodyParser=require('body-parser')
dbConnect();

// app.use("/",(req,res)=>{
//     res.send("Hello from server side")
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use("/api/user" ,authRouter);

app.use(notFound);
app.use(errorHandler)
 
    app.listen(PORT,()=>{
        console.log(`Server is running at port: ${PORT}`)
    })
    
