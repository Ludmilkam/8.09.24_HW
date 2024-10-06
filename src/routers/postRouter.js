const express = require("express")
const postControllers = require("../controllers/postController")
const router = express.Router()

router.get("/all", postControllers.getAllPosts)
router.get("/:id", postControllers.getPostById)
router.post("/create", postControllers.createPost)

module.exports = router


