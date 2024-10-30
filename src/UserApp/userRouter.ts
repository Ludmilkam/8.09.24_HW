import express ,{Router} from "express" 
import userController from "./userController"

const router:Router = Router()

router.get("/login", userController.loginUser)
router.post("/register", userController.registerUser)

export default router