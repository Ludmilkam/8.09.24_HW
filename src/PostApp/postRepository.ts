import { client } from "../client/prismaClient";
import { Prisma } from "@prisma/client";
import { getErrorMessage } from "../tools/getErrorMessage";
import { CreatePost } from "./types";

async function getPostById(id: number) {
    try {
        const post = await client.post.findUnique({
            where: {
                id: Number(id),
            },
            include: {
                tag: true,
            },
        });
        return post;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            const errorMessage = getErrorMessage(err.code);
            return errorMessage;
        }
        return "Unexpected error";
    }
}

async function getAllPosts(max?: number) {
    try {
        const posts = await client.post.findMany({
            include: {
                tag: true,
                comments: true
            },
        });
        return posts;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            const errorMessage = getErrorMessage(err.code);
            return errorMessage;
        }
        return "Unexpected error";
    }
}

async function createPost(data: CreatePost) {
    try {
        const posts = await client.post.create({
            data: data,
        });
        return posts;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            const errorMessage = getErrorMessage(err.code);
            return errorMessage;
        }
        return "Unexpected error";
    }
}


const postRepository = {
    getPostById,
    getAllPosts,
    createPost,
};

export default postRepository;
