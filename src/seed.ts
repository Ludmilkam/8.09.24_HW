import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Создание 1 поста
async function createPost() {
    const post = await prisma.post.create({
        data: { name: "post3", author: "Author3", tagId: 3 },
    });
}
// Создание множеста постов
async function createPosts() {
    const post = await prisma.post.createMany({
        data: [
            {
                name: "post4",
                author: "Author4",
                tagId: 1,
            },
            {
                name: "post5",
                author: "Author5",
                tagId: 1,
            },
            {
                name: "post6",
                author: "Author6",
                tagId: 2,
            },
            {
                name: "post7",
                author: "Author7",
                tagId: 2,
            },
            {
                name: "post8",
                author: "Author8",
                tagId: 2,
            },
            {
                name: "post9",
                author: "Author9",
                tagId: 2,
            },
            {
                name: "post10",
                author: "Author10",
                tagId: 2,
            },
        ],
    });
}

// Обновление одного поста
async function updatePost() {
    const post = await prisma.post.update({
        where: {
            id: 3,
        },
        data: {
            name: "Updated Post",
        },
    });
}
// Получение одного поста с комментариями
async function findPost() {
    const post = await prisma.post.findUnique({
        where: {
            id: 4,
        },
        include: {
            comments: true,
        },
    });
}
// Получение множества постoв
// хз
async function findPosts() {
    const posts = await prisma.post.findMany();
}

// Удаления поста по id
async function deletePost() {
    const post = await prisma.post.delete({
        where: {
            id: 1,
        },
    });
}

// Создание 1 коммента
async function createComment() {
    const comment = await prisma.comment.create({
        data: {
            header: "Comment1",
            body: "Nie wiem co napisać, jakaś treść czegoś",
            img: "mnie lin`ky to szukać",
            postId: 2,
        },
    });
}
// Создание множеста комментов
async function createComments() {
    const comment = await prisma.comment.createMany({
        data: [
            {
                header: "Comment2",
                body: "Nie wiem co napisać, jakaś treść czegoś",
                img: "mnie lin`ky to szukać",
                postId: 2,
            },
            {
                header: "Comment3",
                body: "Nie wiem co napisać, jakaś treść czegoś",
                img: "mnie lin`ky to szukać",
                postId: 3,
            },
            {
                header: "Comment4",
                body: "Nie wiem co napisać, jakaś treść czegoś",
                img: "mnie lin`ky to szukać",
                postId: 4,
            },
            {
                header: "Comment5",
                body: "Nie wiem co napisać, jakaś treść czegoś",
                img: "mnie lin`ky to szukać",
                postId: 4,
            },
            {
                header: "Comment6",
                body: "Nie wiem co napisać, jakaś treść czegoś",
                img: "mnie lin`ky to szukać",
                postId: 5,
            },
        ],
    });
}

// Удаления коммента по id
async function deleteComment() {
    const comment = await prisma.comment.delete({
        where: {
            id: 5,
        },
    });
}

// Поиск коммента по id
async function findComment() {
    const comment = await prisma.comment.findUnique({
        where: {
            id: 4,
        },
    });
}

async function findComments() {
    const posts = await prisma.comment.findMany();
}

// Поиск коммента по id с выводом информации о посте
async function findCommentAndPost() {
    const comment = await prisma.comment.findUnique({
        where: {
            id: 4,
        },
        include: {
            post: true,
        },
    });
}

// Обновление коммента
async function updateComment() {
    const comment = await prisma.comment.update({
        where: {
            id: 3,
        },
        data: {
            header: "Updated Comment",
        },
    });
}

// доп задание
// Сид, который подключает уже существующие комментарии к уже существующим постам
async function connectCommentsFromPosts() {
    const comment = await prisma.comment.updateMany({
        // получаем коммент с id 1
        where: {
            postId: 2,
        },
        // меняем пост к которому он привязан на 4
        data: {
            postId: 4,
        },
    });
}

// Сид, который создает пост и к нему сразу же множеством комментариев(использование только одного запроса в бд)
async function createPostWithComments() {
    const newPost = await prisma.post.create({
        // созадем пост по модели пост
        data: {
            name: "New post",
            description: "Jakaś treść",
            author: "Ja",
            tagId: 3,
            // создаем комменты
            comments: {
                create: [
                    { header: "jakiś naglówek", body: "pierwszy koment" },
                    { header: "jakiś naglówek", body: "drugi koment" },
                    { header: "jakiś naglówek", body: "trzeci koment" },
                ],
            },
        },
        // подключаем комменты к постам
        include: {
            comments: true,
        },
    });
}

async function createTags() {
    const tag = await prisma.tag.createMany({
        data: [
            {
                name: "Molecule",
            },
            {
                name: "Atom",
            },
            {
                name: "imie",
            },
            {
                name: "mila",
            },
        ],
    });
}

async function findTags() {
    const tag = await prisma.tag.findMany();
}

async function main() {
    await createTags();
    await findTags();
    await createPost();
    await createPosts();
    await findPost();
    await findPosts();
    await updatePost();
    await createComment();
    await createComments();
    await findComment();
    await findComments();
    // await findCommentAndPost();
    await updateComment();
    // await deletePost();
    // await deleteComment();
    await connectCommentsFromPosts();
    await createPostWithComments();
}

main()
    .then(() => {
        prisma.$disconnect();
    })
    .catch((err) => {
        prisma.$disconnect();
    });
