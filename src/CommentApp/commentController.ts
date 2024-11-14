import express,{ Express, Request,Response } from "express"

import commentService from "./commentService"


async function getCommentById (req: Request, res: Response) {
    const id = +req.params.id 
    console.log(id)
    const context = await commentService.getCommentById(id)
    res.render('comment', context)
}
async function getAllComments (req: Request, res: Response) {
    const max = req.query.max
    const context = await commentService.getAllComments(req.query.max ? +req.query.max : undefined)
    res.render('comments', context)
}

async function createComment(req: Request, res: Response) {
    console.log(req.body);
    const comment = req.body
    const msg = commentService.createComment(comment)
    res.send(msg)
}
const commentControllers = {
    getCommentById: getCommentById, 
    getAllComments: getAllComments,
    createComment: createComment 
}

export default commentControllers