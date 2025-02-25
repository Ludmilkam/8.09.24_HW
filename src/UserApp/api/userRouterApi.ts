import { Router } from "express";

import userControllerApi from "./userControllerApi";


const router: Router = Router()

router.post("/api/login", userControllerApi.loginUser)
router.post("/api/register", userControllerApi.registerUser)