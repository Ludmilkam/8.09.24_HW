import { Request, Response, NextFunction } from "express";


type UserRole = "admin" | "user";

export function checkRole(requiredRole: UserRole) {
    return (req: Request, res: Response, next: NextFunction) => {

        if (requiredRole === "admin") {
            console.log("Крутой чел");
        }else if (requiredRole === "user") {
            console.log("обычный смертный");
        }

        next(); 
    };
}
