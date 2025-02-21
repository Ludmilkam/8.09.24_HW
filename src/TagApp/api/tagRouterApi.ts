import express from "express"
import tagControllerApi from "./tagControllerApi"

const router = express.Router()

router.get("/all", tagControllerApi.getAllTags)

export default router