import { Tag } from "@prisma/client";
import { IError, IOkWithData } from "../types/types";
import tagRepository from "./tagRepository";


async function getAllTags(): Promise<IOkWithData<Tag[]> | IError>{
    const res  = await tagRepository.getAllTags()

    if (!res){
        return {
            status: "error",
            message: "Tag is not found"
        }
    }

    if (typeof res === "string"){
        return {status:"error", message: res}
    }

    return {
        status: "ok",
        data: res
    }

}

const tagService = {
    getAllTags: getAllTags
}

export default tagService