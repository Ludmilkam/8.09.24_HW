import { client } from "../client/prismaClient";
import { Prisma } from "@prisma/client";
import { getErrorMessage } from "../tools/getErrorMessage";
import { CreateComment } from "./types";

async function getCommentById(id: number) {
    try {
        const comment = await client.comment.findUnique({
            where: {
                id: id,
            },
        });
        return comment;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            const errorMessage = getErrorMessage(err.code);
            return errorMessage;
        }
        return "Unexpected error";
    }
}

async function getAllComments(max?: number) {
    try {
        const comments = await client.comment.findMany();
        return comments;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            const errorMessage = getErrorMessage(err.code);
            return errorMessage;
        }
        return "Unexpected error";
    }
}

async function createComment(data: CreateComment) {
    try {
        const comments = await client.comment.create({
            data: data,
        });
        return comments;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            const errorMessage = getErrorMessage(err.code);
            return errorMessage;
        }
        return "Unexpected error";
    }
}

const commentRepository = {
    getCommentById,
    getAllComments,
    createComment,
};

export default commentRepository;
