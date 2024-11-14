import commentRepository from "./commentRepository"


async function getCommentById (id:number) {
    console.log(id)
    const context = {
        comment: await commentRepository.getCommentById(id),
    }
    return context
}
async function getAllComments (max? :number) {
    console.log(max)
    const context = {
        comments: await commentRepository.getAllComments()
    }
    console.log(context)
    return context
}

async function createComment(comment:{
    header: string,
    body: string,
    img: string | undefined,
}){
    const createdComment = await commentRepository.createComment(comment)
    return "Hello woda"
}

const commentService = {
    getCommentById: getCommentById, 
    getAllComments: getAllComments,
    createComment: createComment 
}

export default commentService