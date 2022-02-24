const userModel =require("../model/user-model")

module.exports.addUser=function(req,res){
    let userName=req.body.userName
    let email=req.body.email
    let password=req.body.password
    let role=req.body.role

    let user= new userModel({
        userName:userName,
        email:email,
        password:password,
        role:role

    })


    user.save(function(err,success){
        if(err){
            res.json({
            msg:"somethig went wrong",
            data:err,
            status:-1
            })
        }else{
            
            res.json({
                msg:"user added",
                data:success,
                status:200
                })
        }
        
    })
}

module.exports.getAllUsers=function(req,res){
    userModel.find().populate("role").exec(function(err,success){
        if(err){
            res.json({
            msg:"somethig went wrong",
            data:err,
            status:-1
            })
        }else{
            res.json({
                msg:"user added",
                data:success,
                status:200
                })
        }
    })
}

module.exports.updateUser=function(req,res){
    userModel.updateOne(function(err,success){
       
        if(err){
            res.json({
            msg:"somethig went wrong",
            data:err,
            status:-1
            })
        }else{
            res.json({
                msg:"user upadated",
                data:success,
                status:200
                })
        }
    })
}

module.exports.deleteUser=function(req,res){
    userModel.deleteOne(function(err,success){
        if(err){
            res.json({
            msg:"somethig went wrong",
            data:err,
            status:-1
            })
        }else{
            res.json({
                msg:"user Deleted",
               data:success,
                status:200
                })
        }
    })
}
