const mongoose=require("mongoose")

const projectTeamSchema=new mongoose.Schema({
    projectTeamName:{
        type:String
    },
    
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    statusId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"status"
    }
})

let projectTeamModel=mongoose.model("projectTeamModel",projectTeamSchema)

module.exports=projectTeamModel