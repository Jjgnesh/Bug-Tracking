const express=require("express")
const mongoose=require("mongoose")
const SessionController = require("./Controller/Session.Controller")
const roleController=require("./Controller/role-Controller")
const userController=require("./Controller/user-Controller")
const statusController=require("./Controller/status-Controller")
const priorityController=require("./Controller/priority-Controller")
const projectController=require("./Controller/project-Controller")
const projectTeamController=require("./Controller/projectTeam-Controller")
const moduleController=require("./Controller/Module-Controller")
const taskController=require("./Controller/task-Controller")
const taskUserController=require("./Controller/taskUser-Controller")
const bugController=require("./Controller/bug-Controller")

const { application } = require("express")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/BugTracking',function(err){
    if(err){
     console.log("db connection fail....");
     console.log(err);
    }else{
     console.log("db connected...");
    }
})




app.get("/",function(req,res){
    res.write("welcom.....")
    res.end()
})

app.get("/login",SessionController.login)
app.get("/signup",SessionController.signup)
app.post("/userSave",SessionController.saveUser)
//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

//user
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.put("/users",userController.updateUser)
app.delete("/users/:userId",userController.deleteUser)


//taskUser
app.post("/taskusers",taskUserController.addTaskUser)
app.get("/taskusers",taskUserController.getAllTaskUser)
app.delete("/taskusers/:taskUser",taskUserController.deleteTaskUser)

//bug
app.post("/bugs",bugController.addBug)
app.get("/bugs",bugController.getAllBug)
app.delete("/bugs",bugController.deleteBug)
app.put("/bugs",bugController.updateBug)

//status
app.post("/status",statusController.addStatus)
app.get("/status",statusController.getAllStatus)
app.put("/status",statusController.upadateStatus)
app.delete("/status/:statusId",statusController.deleteStatus)

//priority
app.post("/priority",priorityController.addPriority)
app.get("/priority",priorityController.getAllpriority)
app.put("/priority",priorityController.upadatePriorty)
app.delete("/priority/:priorityId",priorityController.deletePrioty)

//project 
app.post("/project",projectController.addProject)
app.get("/project",projectController.getAllProject)
app.put("/project",projectController.upadateproject)
app.delete("project/:projectId",projectController.deleteProject)

//project_team
app.post("/projectTeam",projectTeamController.addProjectTeam)
app.get("/projectTeam",projectTeamController.getAllProjectTeam)
app.put("/projectTeam",projectTeamController.upadateprojectTeam)
app.delete("/projectTeam/:projectTeamId",projectTeamController.DeleteProjectTeam)

//module
app.get("/module",moduleController.getAllModule)
app.put("/module",moduleController.UpdateModule)
app.post("/module",moduleController.addModule)
app.delete("/module/:moduleId",moduleController.deleteModule)

//task
app.get("/task",taskController.getAllTask)
app.post("/task",taskController.addTask)
app.put("/task",taskController.updateTask)
app.delete("/task/:taskId",taskController.deleteTask)

app.listen(3000,function(){
    console.log("Server started on 3000")
})