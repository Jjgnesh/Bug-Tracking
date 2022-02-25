const projectTeamModel=require("../model/project_team-model")
const { upadateproject } = require("./project-Controller")

module.exports.addProjectTeam=function(req,res){
    let  projectTeamName= req.body.projectTeamName
    let statusId = req.body.statusId
    let userId =req.body.userId

    let projectTeam = new projectTeamModel({
        projectTeamName:projectTeamName,
        statusId:statusId,
        userId:userId
    })

    projectTeam.save(function(err,success){
        if(err){
            res.json({
                msg:"SMW",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"Project Team added",
                data:success,
                status:200
            })
        }
    })
}

module.exports.getAllProjectTeam =function(req,res){
    projectTeamModel.find().populate("statusId").populate("userId").exec(function(err,success){
        if(err){
            res.json({
                msg:"SMW",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"Project Team listed",
                data:success,
                status:200
            })
        }       
    })
}

module.exports.upadateprojectTeam =function(req,res){
    let projectTeamName = req.body.projectTeamName
    let statusId = req.body.statusId
    let userId = req.body.userId
    let projectTeamId=req.body.projectTeamId

    projectTeamModel.updateOne({_id:projectTeamId},{projectTeamName:projectTeamName},{userId:userId},{statusId:statusId},function(err,success){
        if(err){
            res.json({
                msg:"SMW",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"Project Team Updated",
                data:success,
                status:200
            })
        }
    })
}

module.exports.DeleteProjectTeam=function(req,res){
    let projectTeamId=req.params.projectTeamId
    projectTeamModel.deleteOne({_id:projectTeamId},function(err,success){
        if(err){
            res.json({
                msg:"SMW",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"Project Team Deleted",
                data:success,
                status:200
            })
        }
    })
}