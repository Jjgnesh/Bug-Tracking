const moduleModel = require("../model/module-model")
const modulemodel = require("../model/module-model")

module.exports.addModule =function(req,res){
    let moduleName = req.body.moduleName
    let description = req.body.description
    let estimatedHours=req.body.estimatedHours
    let startDate=req.body.startDate
    let projectId=req.body.projectId
    let priorityId=req.body.priorityId

    let project =new modulemodel({
        moduleName:moduleName,
        description:description,
        estimatedHours:estimatedHours,
        startDate:startDate,
        projectId:projectId,
        priorityId:priorityId
    })
}
module.exports.getAllModule=function(req,res){
    modulemodel.find().populate("statusId").populate("priorityId").exec(function(err,success){
        if(err){
            res.json({
                msg:"SMW",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"Module Listed",
                data:success,
                status:200
            })
        }
   })
}
module.exports.UpdateModule= function(req,res){
    let moduleName = req.body.moduleName
    let description = req.body.description
    let estimatedHours=req.body.estimatedHours
    let startDate=req.body.startDate
    let projectId=req.body.projectId
    let priorityId=req.body.priorityId 
    let moduleId=req.body.moduleId
    modulemodel.updateOne({_id:moduleId},{description:description},{estimatedHours:estimatedHours},{startDate:startDate},{projectId:projectId},{priorityId:priorityId},{moduleName:moduleName},function(err,success){
        if(err){
            res.json({
                msg:"SMW",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"Module Upadated",
                data:success,
                status:200
            })
        }       
    })

}
module.exports.deleteModule=function(req,res){
    let moduleId=req.params.moduleId
    modulemodel.deleteOne({_id:moduleId},function(err,success){
        if(err){
            res.json({
                msg:"SMW",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"Module deleted",
                data:success,
                status:200
            })
        }       
    })
}