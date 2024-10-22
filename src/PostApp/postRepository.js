"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = require("../client/prismaClient");
const client_1 = require("@prisma/client");
function getPostById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield prismaClient_1.client.post.findUnique({
            where: {
                id: id
            }
        });
        return post;
    });
}
function getAllPosts(max) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const posts = yield prismaClient_1.client.post.findMany();
            return posts;
        }
        catch (err) {
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (err.code === "P2002") {
                    console.log(err.message);
                    throw err;
                }
                else if (err.code === "P2015") {
                    console.log(err.message);
                    throw err;
                }
                else if (err.code === "P2019") {
                    console.log(err.message);
                    throw err;
                }
            }
        }
    });
}
function createPost(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield prismaClient_1.client.post.create({
            data: data
        });
        return posts;
    });
}
const postRepository = {
    getPostById,
    getAllPosts,
    createPost
};
exports.default = postRepository;
