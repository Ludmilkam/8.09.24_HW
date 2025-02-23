import { client } from "../client/prismaClient";
import { Prisma } from "@prisma/client";
import { getErrorMessage } from "../tools/getErrorMessage";

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
            console.log(errorMessage);
            return errorMessage;
        }
        console.log(err);
        return "Unexpected error";
    }
}

async function getAllPosts(max?: number) {
    try {
        const posts = await client.post.findMany({
            include: {
                tag: true,
            },
        });
        return posts;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            const errorMessage = getErrorMessage(err.code);
            console.log(errorMessage);
            return errorMessage;
        }
        console.log(err);
        return "Unexpected error";
    }
}

async function createPost(data: Prisma.PostCreateInput) {
    try {
        const posts = await client.post.create({
            data: data,
        });
        return posts;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            const errorMessage = getErrorMessage(err.code);
            console.log(errorMessage);
            return errorMessage;
        }
        console.log(err);
        return "Unexpected error";
    }
}

async function deletePost(id: number) {
    try {
        const post = await client.post.delete({
            where: {
                id: id,
            },
        });
        return post;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            const errorMessage = getErrorMessage(err.code);
            console.log(errorMessage);
            return errorMessage;
        }
        console.log(err);
        return "Unexpected error";
    }
}

const postRepository = {
    getPostById,
    getAllPosts,
    createPost,
    deletePost,
};

export default postRepository;
