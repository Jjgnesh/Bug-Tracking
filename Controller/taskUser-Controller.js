const TaskUserModel =require("../model/taskUser-model")

module.exports.addTaskUser=function (req,res){
    const taskUser= req.body.taskUser
    const taskId  = req.body.taskId 
    
    let TaskUser = new taskUserModel({
        taskUser:taskUser,
        taskId:taskId
    })
    TaskUser.save(function(err,success){
        if(err){
            console.log(err);
            res.json({msg:"Something Wrong",status:-1,data:req.body})        
        }
        else{
            res.json({msg:"User added",status:200,data:success})
        }
    })
}

module.exports.getAllTaskUser = function(req,res){
    TaskUserModel.find().populate("taskUser").populate("taskId").exec(function(err,roles){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:req.body})
        }
        else{
            res.json({msg:"Data Retraive",status:200,data:roles})
        }
    })
}
module.exports.deleteTaskUser = function(req,res){
    let taskUser = req.params.taskUser
    let taskId = req.body.taskId
    TaskUserModel.deleteOne({_id:TaskUserId},{taskUser:taskUser},{taskId:taskId},function(err,data) {
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:req.body})
        }
        else{
            res.json({msg:"Delete Successfully",status:200,data:data})
        }
    })
}
module.exports.updateTaskUser=function(req,res){
    let taskUser = req.body.taskUser
    let taskId = req.body.taskId
    TaskUserModel.deleteOne({_id:TaskUserId},{taskUser:taskUser},{taskId:taskId},function(err,data) {
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:req.body})
        }
        else{
            res.json({msg:"updated Successfully",status:200,data:data})
        }
    })

}