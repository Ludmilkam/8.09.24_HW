import express from "express"
import commentControllerApi from "./commentControllerApi"

const router = express.Router()

router.get("/all", commentControllerApi.getAllPosts)
router.get("/:id", commentControllerApi.getPostById)

export default router