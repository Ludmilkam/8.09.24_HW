import { sign } from "jsonwebtoken"
import { IError, IOkWithData } from "../types/types"
import { CreateUser, User } from "./types"
import userRepository from "./userRepository"
import { hash , compare } from "bcryptjs"
import { SECRET_KEY } from "../config/token"


async function authLogin(password:string, email: string): Promise<IOkWithData<string> | IError> {
    const user = await userRepository.findUserByEmail(email)

    if (!user) {
        return {status:"error", message: "user not found"}
    }
    if ( typeof user != password) {
        return {status:"error", message: "Passwords are not similar"}
    }
    
    if (typeof user === "string") {
        return { status: "error", message: "something wrong" };

    } 

    const isMatch = await compare(password, user.password);
        if (!isMatch) {
            return { status: "error", message: "Passwords are not passwords" };
 
        }
    
    const token = sign(String(user.id), SECRET_KEY, { expiresIn: "1d" })
    console.log(user)
    console.log(typeof user)
    return {status : "ok" , data: token}
}

async function authRegistration(userData: CreateUser): Promise<IOkWithData<string> | IError> {
    const user = await userRepository.findUserByEmail(userData.email)

    if (user){
        return { status:"error", message:"user exists" }
    }


    const hashedPassword = await hash(userData.password, 10)
    
    const hashedUserData = {
        ...userData ,
        password: hashedPassword
    }

    const newUser = await userRepository.createUser(hashedUserData);

    if (typeof newUser === "string") {
        return { status: "error", message: "something wrong" };
    } 

    if (!newUser){
        return{ status:"error", message:"User wasn`t created successfully" }
    }

    const token = sign(String(newUser.id), SECRET_KEY, { expiresIn: "1d" })
    return{ status:"ok" , data: token}

}

const userService = {
    authLogin: authLogin,
    authRegistration: authRegistration
}

export default userService
