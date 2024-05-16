const router=require("express").Router();
const User=require("../Models/User");
const bcrypt=require('bcrypt');

//Register
router.post("/register",async(req,res)=>{
    try{
        //generate password
        const salt=await bcrypt.hash(req,body.password)
        username:req.body.username,

    }
})

//create user 
const newUser= new User ,

//SAVE user and respond 
const user =await newU