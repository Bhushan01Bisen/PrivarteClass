const User=require('../Models/User');
const router=require("express").Router();
const bcrypt=require("bcrypt");

//update user
router.put(":/id",async (req,res)=>{
    if(req.body.userId===req.params.id||req.body.isAdmin){
        if(req.body.password){
            try{
                const salt=await bcrypt.genSalt(10);
                req.body.password=await bcrypt.hash(req.body.password,salt)
            }catch(err){
                return res.status(500).json(err);

            }
        }
        try{
            const User=await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            })
        }catch(err){
            return res.status(403).json("You can update only your account")
        }
    }
})

//delete user
router.delete(":/id",async (req,res)=>{
    if(req.body.userId===req.params.id||req.body.isAdmin){
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted")
        } catch (err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(403).json("you can delete only your account!..")
    }
})

//get a user
router.get("/",async (req,res)=>{
    const userId=req.query.userId;
    const username=req.query.username;

    try{
        const user=userId
        ? await user.findById(userId)
        :await User.findOne({username:username});
        const { password,updatedAt,...other}=user._doc;
        res.status(200).json(other);

    } catch(err){
        res.status(500).json(err);
    }
});

//get Freind
router.get("/friends/:userId",async (req,res)=>{
    try{
        const user=await User.findById(req.params.userId)
   const friends=await Promise.all(
    user.followings.map((freindId)=>{
        return User.findById(freindId);
    })
   );
   let friendList=[];
   friends.map((friend)=>{
    const {_id,username,profilePicture}=friend;
    friendList.push({_id,username,profilePicture})
   });
   res.status(200).json(friendList)
   
    } catch(err){
        res.status(500).json(err)
    }
})

//follow user
router.put("/:id/follow",async (req,res)=>{
    if(req.body.userId!==req.params.id){
        try{
            const user=await User.findById(req.params.id);
            const currentUser= await User.findById(req.body.userId)
       if(!user.followers.includes(req.body.userId)){
        await user.updateOne({$push:{followers:req.body.userId}})
     await currentUser.updateOne({$push:{followers:req.params.id}})  
   res.status(200).json("user has been followed ");
   
    }else{
        res.status(403).json("you already follow the user")
    }
       
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("you can not unfollow yourself")
    }
})
module.exports=router;