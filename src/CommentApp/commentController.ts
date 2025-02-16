import express,{ Express, Request,Response } from "express"

import commentService from "./commentService"


async function getCommentById (req: Request, res: Response) {
    const id = +req.params.id 
    console.log(id)
    const context = await commentService.getCommentById(id)
    if (context.status === "error") {
		res.render("error", { message: context.message });
		return;
	}
    res.render('comment',{comment: context.data})
}
async function getAllComments (req: Request, res: Response) {
    const max = req.query.max
    const context = await commentService.getAllComments()
    // req.query.max ? +req.query.max : undefined
    if (context.status === "error") {
		res.render("error", { message: context.message });
		return;
	}
    res.render('comments', {comment: context.data})
}

async function createComment(req: Request, res: Response) {
    console.log(req.body);
    const comment = req.body
    const result =  await commentService.createComment(comment)
    res.json({
		message: result.message,
		status: result.status,
	});
}
const commentControllers = {
    getCommentById: getCommentById, 
    getAllComments: getAllComments,
    createComment: createComment 
}

export default commentControllers