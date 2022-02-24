const mongoose =require ("mongoose")


const userSchema = new mongoose.Schema({
    userName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },

    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"role"
    }


})

const userModel =mongoose.model("user",userSchema)

module.exports=userModel