import express ,{Router} from "express" 
import userController from "./userController"
import { authMiddleware } from "../middlewares/authMiddleware"

const router:Router = Router()
// ему плохо
// router.use(authMiddleware)

router.get("/login", userController.loginUser)
router.post("/login", userController.authUser)
router.get("/registration", userController.registerUser)
router.post("/registration", userController.authRegisterUser)


export default router
