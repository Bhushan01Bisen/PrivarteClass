const mongoose = require('mongoose'); // Erase if already required
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        
    },
    lastname:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdimin:{
        type:String,
        default:"user"
    },
    tokens:[{
        token:{
            type:String,
        required:true,
        }
    }]
});


userSchema.pre('save',async function (next) {
    const salt = await bcrypt.genSaltSync(10);
    this.password=await bcrypt.hash(this.password,salt)
})
userSchema.methods.isPasswordMatched=async function (enteredPassword ){
    return await bcrypt.compare(enteredPassword,this.password)
}

userSchema.methods.generateToken=async function(){
    try{
        const token=jwt.sign({_id:this._id},process.env.JWT_SECRET)
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token;
    }catch (err){
        console.log(err)

    }  
    
}

//Export the model
module.exports = mongoose.model('User', userSchema);