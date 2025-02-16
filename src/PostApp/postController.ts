/*
у контроллері зберігаєтються данні, які треба відправити

*/
import express,{ Express, Request,Response } from "express"
// const postService = require('../services/postService')
import postService from "./postService"


async function getPostById (req: Request, res: Response) {
    const id = +req.params.id 
    console.log(id)
    const context = await postService.getPostById(id)
    if (context.status === "error") {
		res.render("error", { message: context.message });
		return;
	}
    res.render('post', {post: context.data})
}
async function getAllPosts (req: Request, res: Response) {
    // console.log(req.query)
    // сделать проверку на undefined
    // const max = req.query.max === undefined ? 1 : +req.query.max
    // const context = postService.getAllPosts(max)
    // console.log(req.query.max)
    const max = req.query.max
    const context = await postService.getAllPosts()
    if (context.status === "error") {
		res.render("error", { message: context.message });
		return;
	}
    // req.query.max ? +req.query.max : undefined
    // const context = postService.getAllPosts(+req.query.max)
    res.render('posts', {post: context.data})
}
// ?
async function createPost(req: Request, res: Response) {
    console.log(req.body);
    const post = req.body
    const result = await postService.createPost(post)
    res.json({
        message: result.message,
        status: result.status
    })
}

// не розумію нічого
async function deletePost(req: Request, res: Response){
    console.log(req.body);
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