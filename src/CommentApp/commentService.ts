import { IError, IOk, IOkWithData } from "../types/types";
import commentRepository from "./commentRepository";
import { Comment, CreateComment } from "./types";

async function getCommentById(
    id: number
): Promise<IOkWithData<Comment> | IError> {
    console.log(id);
    const res = await commentRepository.getCommentById(id);
    if (!res) {
        return {
            status: "error",
            message: "Product is not found",
        };
    }

    if (typeof res === "string") {
        return { status: "error", message: res };
    }
    return {
        status: "ok",
        data: res,
    };
}
async function getAllComments(): Promise<IOkWithData<Comment[]> | IError> {
    // console.log(max)
    const res = await commentRepository.getAllComments();
    if (typeof res === "string") {
        return { status: "error", message: res };
    }
    return {
        status: "ok",
        data: res,
    };
}

async function createComment(comment: CreateComment): Promise<IOk | IError> {
    const res = await commentRepository.createComment(comment);
    if (typeof res === "string") {
        return { status: "error", message: res };
    }

    return {
        status: "ok",
        message: "Successfuly created product",
    };
    // return "Hello woda"
}

const commentService = {
    getCommentById: getCommentById,
    getAllComments: getAllComments,
    createComment: createComment,
};

export default commentService;
