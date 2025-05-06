import { Request, Response, NextFunction } from "express";


type Role = "admin" | "user";

export function adminCheckRole(requiredRole: Role) {
    return (req: Request, res: Response, next: NextFunction) => {
        if (requiredRole === "admin") {
            console.log("Крутой чел");
        }else if (requiredRole === "user") {
            
            console.log("обычный смертный");
        }
        next(); 
    };
}
// adminCheckRole проверяет если чел админ, то дает ему доступ и потом next()
