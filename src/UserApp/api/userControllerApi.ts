import bcrypt from "bcrypt"
import {Request,Response} from "express"
import { sign } from "jsonwebtoken"
import userService from "../userService"
import { SECRET_KEY } from "../../config/token"
import { CreateUser } from "../types"


// const saltRounds = 10
// const myPlaintextPassword = 's0/\/\P4$$w0rD'
// const someOtherPlaintextPassword = 'not_bacon'
// bcrypt.genSalt(saltRounds, function(err, salt){
//     bcrypt.hash(myPlaintextPassword,salt,function(err,hash){
        
//     })
// })
// bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
//     // result == true
// });
// bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
//     // result == false
// });

async function loginUser(req:Request, res: Response){
    const data = req.body
    const user = await userService.authLogin(data.password, data.email)

    if (!user){
        return res.status(409).json({error: "User does not exist"})
    }


    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
        return res.status(409).json({ error: 'Passwords don`t matching' });
    }

    

    const token = sign(user, SECRET_KEY, {expiresIn : "1h"})
    res.json({ token })
    res.sendStatus(200)
}



async function registerUser(req: Request, res: Response){
    const data = req.body as CreateUser
    const user = await userService.authRegistration(data)

    if ( user ){
        return res.status(409).json({error:"User already exist"})
    }
    const hashPassword = await bcrypt.hash(data.password, 10)
    const newUser = {username: data.username, email: data.email , password: hashPassword };
    

    const token = sign(user, SECRET_KEY, {expiresIn : "1h"})
    res.json({ token })
    res.sendStatus(200)
}

const userControllerApi={
    loginUser,
    registerUser
}

export default userControllerApi