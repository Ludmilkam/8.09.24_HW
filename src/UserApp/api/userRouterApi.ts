import { Router } from "express";

import userControllerApi from "./userControllerApi";
import { authTokenMiddleware } from "../../middlewares/authTokenMiddleware";


const router: Router = Router()

router.post("/login", userControllerApi.loginUser)
router.post("/register", userControllerApi.registerUser)
router.get("/me" , authTokenMiddleware , userControllerApi.getUser)