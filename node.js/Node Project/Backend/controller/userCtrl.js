const User =require('../models/userModel')
const asyncHandler=require('express-async-handler');

const { generateToken } = require('../config/jwtToken');
const createUser=asyncHandler(async(req,res)=>{
// const createUser=async (req,res)=>{
    const email=req.body.email;
    const findUser=await User.findOne({email:email});
    if (!findUser) {
        //create a new user
        const newUser=await User.create(req.body);
        res.json (newUser);
    }

    else{
        throw new Error ("user already exists")
        // res.json({
        //     msg:"User is already exist",
        //     success:false
        // });
    }

});

const loginUserCtrl=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    // console.log(email,password);
    const findUser=await User.findOne({email});
    if (findUser && await findUser.isPasswordMatched(password)){
        res.json({
            _id:findUser?._id,
            firstname:findUser?.firstname,
            lastname:findUser?.lastname,
            email:findUser?.email,
            mobile:findUser?.mobile,
        token:await findUser.generateToken()
        })
    }else{
        throw new Error ("Invalid Credentials")
    }

});

module.exports={createUser,loginUserCtrl}