import { NextFunction, Request, Response } from "express";
import { verify, TokenExpiredError } from "jsonwebtoken";
import { SECRET_KEY } from "../config/token";

interface IToken {
    id: number;
    username: string;
    email: string;
    password: string;
    iat: number;
    exp: number;
}

export function authMiddleware(req: Request, res: Response, next: NextFunction){
    try {
        const cookies = req.cookies;
    if (cookies.token) { // если в cookies нет ключа token - вернется undefined во избежание ошибки
        const token = verify(cookies.token, SECRET_KEY) as IToken
        console.log(token);
        res.locals.user = {
            id: token.id,
            username: token.username,
            email: token.email,
            password: token.password,
        }
        console.log("Авторизированный чел");
        next();
    } else {
        res.sendStatus(403)
    }
    } catch (error) {
        if (error instanceof TokenExpiredError) {
            return res.status(401).json({ error: "Token expired" });
        } 
    }
}
