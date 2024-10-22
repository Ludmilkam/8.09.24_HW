/*
у роутері прописуємо шляхи за якими ми будемо знаходити сторінки

*/



// const express = require("express")
import express, {Express, Router} from 'express'
// const postControllers = require("../controllers/postController")
import postControllers from './postController'


const router = Router()

router.get("/all", postControllers.getAllPosts)
router.post("/create", postControllers.createPost)
router.get("/:id", postControllers.getPostById)
// module.exports = router
export default router

