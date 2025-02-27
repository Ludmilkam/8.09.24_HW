/*
у роутері прописуємо шляхи за якими ми будемо знаходити сторінки

*/
// не используешь
import express, {Express, Router} from 'express'
import postControllers from './postController'
import { authMiddleware } from "../middlewares/authMiddleware"
import { checkRole } from '../middlewares/roleMiddelware'


const router = Router()
// он выпендривается и я незнаю почему😕
// router.use(authMiddleware)

router.get("/all", postControllers.getAllPosts)
router.get("/create",authMiddleware , checkRole("admin") ,postControllers.createPost)
router.get("/delete", checkRole("admin"),postControllers.deletePost)
router.get("/:id", postControllers.getPostById)


export default router


