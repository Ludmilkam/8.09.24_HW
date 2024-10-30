import {Request,Response} from "express"

function loginUser(req:Request,res:Response){
    res.render("login")
}

function registerUser(req:Request, res:Response){
    console.log(req.body)
    res.cookie("token", "mysecrettoken")
    res.sendStatus(200)
}
function authLogin(){
    
}

const userController={
    loginUser,
    registerUser
}


export default userController