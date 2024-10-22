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
    res.render('post', context)
}
async function getAllPosts (req: Request, res: Response) {
    // console.log(req.query)
    // сделать проверку на undefined
    // const max = req.query.max === undefined ? 1 : +req.query.max
    // const context = postService.getAllPosts(max)
    // console.log(req.query.max)
    const max = req.query.max
    const context = await postService.getAllPosts(req.query.max ? +req.query.max : undefined)
    // const context = postService.getAllPosts(+req.query.max)
    res.render('posts', context)
}

async function createPost(req: Request, res: Response) {
    console.log(req.body);
    const post = req.body
    const msg = postService.createPost(post)
    res.send(msg)
}
const postControllers = {
    getPostById: getPostById, 
    getAllPosts: getAllPosts,
    createPost: createPost 
}

export default postControllers