import express, {Express, Router} from 'express'
import commentControllers from './commentController'
import { authMiddleware } from "../middlewares/authMiddleware"


const router = Router()
// router.use(authMiddleware)

router.get("/all", commentControllers.getAllComments)
router.post("/create", commentControllers.createComment)
router.get("/:id", commentControllers.getCommentById)

export default router

