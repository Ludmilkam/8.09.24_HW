/*
у роутері прописуємо шляхи за якими ми будемо знаходити сторінки

*/
import express, {Express, Router} from 'express'
import postControllers from './postController'
import { authMiddleware } from "../middlewares/authMiddleware"
import { checkRole } from '../middlewares/roleMiddelware'


const router = Router()
// он выпендривается и я незнаю почему😕
// router.use(authMiddleware)

router.get("/all", postControllers.getAllPosts)
router.post("/create",checkRole("admin") ,postControllers.createPost)
router.get("/:id", postControllers.getPostById)
router.get("/delete", checkRole("admin"),postControllers.deletePost)

export default router


