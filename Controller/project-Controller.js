const projectModel = require("../model/project-model")

module.exports.addProject = function (req, res) {
    let projectName = req.body.projectName
    let description = req.body.description
    let projectManagerId = req.body.projectManagerId
    let technology = req.body.technology
    let statusId = req.body.statusId
    let complicenceHour = req.body.complicenceHour
     let startDate=req.body.startDate

    let project = new projectModel({
        projectName: projectName,
        description: description,
        projectManagerId: projectManagerId,
        technology: technology,
        statusId: statusId
    })

    project.save(function (err, success) {
        if (err) {
            res.json({
                msg: "SMW",
                data: err,
                status: -1
            })
        } else {
            res.json({
                msg: "Project",
                data: success,
                status: 200
            })
        }
    })
}

module.exports.getAllProject = function (req, res) {
    projectModel.find().populate("statusId").populate("projectManagerId").exec(function (err, success) {
        if (err) {
            req.json({
                msg: "SMW",
                data: err,
                status: -1
            })
        } else {
            req.json({
                msg: "SMW",
                data: success,
                status: 200
            })
        }
    })
}

module.exports.upadateproject = function (req, res) {
    let projectId = req.body.projectId
    let projectName = req.body.projectName
    let description = req.body.description
    let projectManagerId = req.body.projectManagerId
    let statusId = req.body.statusId
    projectModel.updateOne({ _id: projectId }, { projectName: projectName }, { description: description }, { projectManagerId: projectManagerId }, { statusId: statusId }, function (err, success) {
        if (err) {
            res.json({
                msg: "SMW",
                data: err,
                status: -1
            })
        } else {
            res.json({
                msg:"Project Updated....",
                data:success,
                status:200
            })
        }
    })
}

module.exports.deleteProject=function(req,res){
    let projectId=req.params.priorityId
    projectModel.deleteOne({_id:priorityId},function(err,success){
        if(err){
            res.json({
                msg:"SMW",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"project deleted",
                data:success,
                status:200
            })
        }
    })
}