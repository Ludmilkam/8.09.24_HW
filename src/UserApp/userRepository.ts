import { client } from "../client/prismaClient";
import { Prisma } from "@prisma/client";
import { getErrorMessage } from "../tools/getErrorMessage";

async function findUserByEmail(email: string) {
    try {
        const user = await client.user.findUnique({
            where: {
                email: email,
            },
        });
        return user;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            const errorMessage = getErrorMessage(err.code);
            return errorMessage;
        }
        return "Unexpected error";
    }
}

async function findUserById (id : number) {
    try {
        const user = await client.user.findUnique({
            where:{
                id :id
            },
            select: {
                username: true, 
                email: true, 
                id: true,
                role: true,
                description: true,
                password: true,
                image: true
            },
        });
        return user;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            const errorMessage = getErrorMessage(err.code);
            console.log(errorMessage);
            return errorMessage;
        }
        console.log(err);
        return "error";
    }
}


async function createUser(data: Prisma.UserCreateInput) {
    try {
        const user = await client.user.create({
            data: data,
        });
        return user;
    } catch (err) {
        console.log(err)
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            const errorMessage = getErrorMessage(err.code);
            return errorMessage;
        }
        return "Unexpected error";
    }
}

const userRepository = {
    findUserByEmail,
    findUserById,
    createUser
};

export default userRepository;
