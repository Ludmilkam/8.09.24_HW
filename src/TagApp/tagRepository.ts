import { Prisma } from "@prisma/client";
import { client } from "../client/prismaClient";
import { getErrorMessage } from "../tools/getErrorMessage";
async function getAllTags(){
    try{
        const tags = await client.tag.findMany()
        return tags
    }catch(err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            const errorMessage = getErrorMessage(err.code)
            return errorMessage
        }
        return "Unexpected error"
    }
}

const tagRepository = {
    getAllTags
}

export default tagRepository