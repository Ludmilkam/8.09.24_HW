/*
у контроллері зберігаєтються данні, які треба відправити

*/
import { Request,Response } from "express"
import postService from "./postService"


async function getPostById (req: Request, res: Response) {
    const id = +req.params.id 
    const context = await postService.getPostById(id)
    if (context.status === "error") {
		res.render("error", { message: context.message });
		return;
	}
    res.render('post', {post: context.data})
}
async function getAllPosts (req: Request, res: Response) {
    const context = await postService.getAllPosts()
    if (context.status === "error") {
		res.render("error", { message: context.message });
		return;
	}
    res.render('posts', {posts: context.data})
}
// ?
async function createPost(req: Request, res: Response) {
    const post = req.body
    const result = await postService.createPost(post)
    res.json({
        message: result.message,
        status: result.status
    })
}

// не розумію нічого
async function deletePost(req: Request, res: Response){
    const post = req.body
    const msg = postService.deletePost(post)
    res.send(msg)
}

const postControllers = {
    getPostById: getPostById, 
    getAllPosts: getAllPosts,
    createPost: createPost,
    deletePost: deletePost 
}

export default postControllers