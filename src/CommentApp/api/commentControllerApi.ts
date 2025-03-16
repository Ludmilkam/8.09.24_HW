import { Request, Response } from "express"
import commentService from "../commentService"

async function getPostById(req: Request, res: Response){
    const id = +req.params.id
    const result = await commentService.getCommentById(id)
    res.json(result)
}
async function getAllPosts(req: Request, res: Response){
    const result = await commentService.getAllComments()
    res.json(result)
}

const commentControllerApi = {
    getPostById,
    getAllPosts
}

export default commentControllerApi