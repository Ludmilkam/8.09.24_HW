import {Request,Response} from "express"
import userService from "../userService"



async function loginUser(req:Request, res: Response){
    const data = req.body
    const result = await userService.authLogin(data.email, data.password)
    res.json(result)
}



async function registerUser(req: Request, res: Response){
    const data = req.body
    const result = await userService.authRegistration(data)
    res.json(result)
}

const userControllerApi={
    loginUser,
    registerUser
}

export default userControllerApi