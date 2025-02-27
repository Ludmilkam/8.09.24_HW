// не используешь
import express,{ Express, Request,Response } from "express"
import tagService from "../tagService"

async function getAllTags(req: Request, res: Response){
    const result = await tagService.getAllTags()
    res.json(result)
}

const tagControllerApi = {
    getAllTags
}

export default tagControllerApi