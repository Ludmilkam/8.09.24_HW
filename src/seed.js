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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient;
// Создание 1 поста 
function createPost() {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield prisma.post.create({
            data: {
                name: 'post3',
                author: 'Author3'
            }
        });
        console.log(post);
    });
}
// Создание множеста постов
function createPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield prisma.post.createMany({
            data: [
                {
                    name: 'post4',
                    author: 'Author4'
                },
                {
                    name: 'post5',
                    author: 'Author5'
                },
                {
                    name: 'post6',
                    author: 'Author6'
                },
                {
                    name: 'post7',
                    author: 'Author7'
                },
                {
                    name: 'post8',
                    author: 'Author8'
                },
                {
                    name: 'post9',
                    author: 'Author9'
                },
                {
                    name: 'post10',
                    author: 'Author10'
                }
            ]
        });
        console.log(post);
    });
}
// Обновление одного поста
function updatePost() {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield prisma.post.update({
            where: {
                id: 3
            },
            data: {
                name: 'Updated Post'
            }
        });
        console.log(post);
    });
}
// Получение одного поста с комментариями
function findPost() {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield prisma.post.findUnique({
            where: {
                id: 4
            },
            include: {
                comments: true
            }
        });
        console.log(post);
    });
}
// Получение множества постoв
// хз
function findPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield prisma.post.findMany();
        console.log(posts);
    });
}
// Удаления поста по id
function deletePost() {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield prisma.post.delete({
            where: {
                id: 1
            }
        });
        console.log(post);
    });
}
// Создание 1 коммента 
function createComment() {
    return __awaiter(this, void 0, void 0, function* () {
        const comment = yield prisma.comment.create({
            data: {
                header: 'Comment1',
                body: 'Nie wiem co napisać, jakaś treść czegoś',
                img: "mnie lin`ky to szukać",
                postId: 2
            }
        });
        console.log(comment);
    });
}
// Создание множеста комментов
function createComments() {
    return __awaiter(this, void 0, void 0, function* () {
        const comment = yield prisma.comment.createMany({
            data: [
                {
                    header: 'Comment2',
                    body: 'Nie wiem co napisać, jakaś treść czegoś',
                    img: "mnie lin`ky to szukać",
                    postId: 2
                },
                {
                    header: 'Comment3',
                    body: 'Nie wiem co napisać, jakaś treść czegoś',
                    img: "mnie lin`ky to szukać",
                    postId: 3
                },
                {
                    header: 'Comment4',
                    body: 'Nie wiem co napisać, jakaś treść czegoś',
                    img: "mnie lin`ky to szukać",
                    postId: 4
                },
                {
                    header: 'Comment5',
                    body: 'Nie wiem co napisać, jakaś treść czegoś',
                    img: "mnie lin`ky to szukać",
                    postId: 4
                },
                {
                    header: 'Comment6',
                    body: 'Nie wiem co napisać, jakaś treść czegoś',
                    img: "mnie lin`ky to szukać",
                    postId: 5
                }
            ]
        });
        console.log(comment);
    });
}
// Удаления коммента по id
function deleteComment() {
    return __awaiter(this, void 0, void 0, function* () {
        const comment = yield prisma.comment.delete({
            where: {
                id: 1
            }
        });
        console.log(comment);
    });
}
// Поиск коммента по id
function findComment() {
    return __awaiter(this, void 0, void 0, function* () {
        const comment = yield prisma.comment.findUnique({
            where: {
                id: 4
            }
        });
        console.log(comment);
    });
}
// Поиск коммента по id с выводом информации о посте
function findCommentAndPost() {
    return __awaiter(this, void 0, void 0, function* () {
        const comment = yield prisma.comment.findUnique({
            where: {
                id: 4
            },
            include: {
                Post: true
            }
        });
        console.log(comment);
    });
}
// Обновление коммента
function updateComment() {
    return __awaiter(this, void 0, void 0, function* () {
        const comment = yield prisma.comment.update({
            where: {
                id: 3
            },
            data: {
                header: 'Updated Comment'
            }
        });
        console.log(comment);
    });
}
// доп задание
// Сид, который подключает уже существующие комментарии к уже существующим постам
function connectCommentsFromPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const comment = yield prisma.comment.updateMany({
            // получаем коммент с id 1
            where: {
                postId: 2,
            },
            // меняем пост к которому он привязан на 4
            data: {
                postId: 4,
            },
        });
    });
}
// Сид, который создает пост и к нему сразу же множеством комментариев(использование только одного запроса в бд)
function createPostWithComments() {
    return __awaiter(this, void 0, void 0, function* () {
        const newPost = yield prisma.post.create({
            // созадем пост по модели пост
            data: {
                name: 'New post',
                description: 'Jakaś treść',
                author: "Ja",
                // создаем комменты
                comments: {
                    create: [
                        { header: "jakiś naglówek", body: 'pierwszy koment' },
                        { header: "jakiś naglówek", body: 'drugi koment' },
                        { header: "jakiś naglówek", body: 'trzeci koment' },
                    ],
                },
            },
            // подключаем комменты к постам
            include: {
                comments: true,
            },
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield createPost();
        yield createPosts();
        yield findPost();
        yield findPosts();
        yield updatePost();
        yield deletePost();
        yield createComment();
        yield createComments();
        yield findComment();
        yield findCommentAndPost();
        yield deleteComment();
        yield updateComment();
        yield connectCommentsFromPosts();
        yield createPostWithComments();
    });
}
main().then(() => {
    prisma.$disconnect();
}).catch((err) => {
    console.log(err);
    prisma.$disconnect();
});
