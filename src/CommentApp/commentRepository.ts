import { client } from "../client/prismaClient"
import { Prisma } from "@prisma/client"



async function getCommentById(id: number){
    const comment = await client.comment.findUnique({
        where: {
            id: id
        }
    })
    return comment
}



async function getAllComments(max?: number){
    try {
        const comments = await client.comment.findMany()
        return comments
    }catch (err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code === "P2002"){
                console.log(err.message)
                throw err
            }else if ( err.code === "P2015"){
                console.log(err.message)
                throw err
            }else if ( err.code === "P2019"){
                console.log(err.message)
                throw err
            }
        }
    }
}



async function createComment(data: Prisma.CommentCreateInput){
    const comments = await client.comment.create({
        data: data
    })
    return comments
} 





const commentRepository = {
    getCommentById, 
    getAllComments,
    createComment 
}

export default commentRepository