import { client } from "../client/prismaClient"
import { Prisma } from "@prisma/client"



async function getPostById(id: number){
    const post = await client.post.findUnique({
        where: {
            id: id
        }
    })
    return post
}



async function getAllPosts(max?: number){
    try {
        const posts = await client.post.findMany()
        return posts
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



async function createPost(data: Prisma.PostCreateInput){
    const posts = await client.post.create({
        data: data
    })
    return posts
} 





const postRepository = {
    getPostById, 
    getAllPosts,
    createPost 
}

export default postRepository