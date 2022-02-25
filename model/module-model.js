const mongoose= require("mongoose")


const moduleSchema = new mongoose.Schema({
    moduleName:{
        type:String
    },
    description:{
        type:String
    },
    estimatedHour:{
        type:String
    },
    startDate:{
        type:String
    },
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    priortyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"priority"
    }
})
 const moduleModel = mongoose.model("module",moduleSchema)

 module.exports=moduleModel