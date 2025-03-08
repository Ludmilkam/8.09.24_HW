/*
у роутері прописуємо шляхи за якими ми будемо знаходити сторінки

*/
import { Router} from 'express'
import postControllers from './postController'
import { authMiddleware } from "../middlewares/authMiddleware"
// import { checkRole } from '../middlewares/roleMiddelware'


const router = Router()

router.use(authMiddleware)

router.get("/all", postControllers.getAllPosts)
router.get("/create", postControllers.createPost)
router.get("/delete", postControllers.deletePost)
router.get("/:id", postControllers.getPostById)


export default router


