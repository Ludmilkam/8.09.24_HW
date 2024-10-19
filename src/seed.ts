import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Создание 1 поста 
async function createPost(){
    const post = await prisma.post.create({
        data: {
            name: 'post4',
            author: 'Author4'
        }
    })
    console.log(post)
}
// Создание множеста постов
async function createPosts(){
    const post = await prisma.post.createMany({
        data :[
            {
                name: 'post4',
                author: 'Author4'

            },
            {
                name: 'post5',
                author: 'Author5'
            }
        ]
    })
    console.log(post)
}


// Обновление одного поста
async function updatePost() {
    const post = await prisma.post.update({
        where: {
            id: 3
        },
        data: {
            name: 'Updated Post'
        }
    })
    console.log(post)

}
// Получение одного поста с комментариями
async function findPost() {
    const post = await prisma.post.findUnique({
        where: {
            id: 4
        },
        include: {
            comments: true
        }
    })
    console.log(post)
}
// Получение множества постoв
// хз
// async function findPosts() {
//     const post = await prisma.post.findMany({
//         where: {
//             id: 4
//         })({
//         where: {
//             id: 5
//         }
//     })
//     })
//     console.log(post)
// }

// Удаления поста по id
async function deletePost() {
    const post = await prisma.post.delete({
        where: {
            id: 1
        }
    })
    console.log(post)
}

// Создание 1 коммента 
async function createComment(){
    const comment = await prisma.comment.create({
        data: {
                header: 'Comment1',
                body:'Nie wiem co napisać, jakaś treść czegoś',
                img:"mnie lin`ky to szukać",
                postId: 1
        }
    })
    console.log(comment)
}
// Создание множеста комментов
async function createComments(){
    const comment = await prisma.comment.createMany({
        data :[
            {
                header: 'Comment2',
                body:'Nie wiem co napisać, jakaś treść czegoś',
                img:"mnie lin`ky to szukać",
                postId: 2

            },
            {
                header: 'Comment3',
                body:'Nie wiem co napisać, jakaś treść czegoś',
                img:"mnie lin`ky to szukać",
                postId: 2
            },
            {
                header: 'Comment4',
                body:'Nie wiem co napisać, jakaś treść czegoś',
                img:"mnie lin`ky to szukać",
                postId: 3
            },
            {
                header: 'Comment5',
                body:'Nie wiem co napisać, jakaś treść czegoś',
                img:"mnie lin`ky to szukać",
                postId: 3
            },
            {
                header: 'Comment6',
                body:'Nie wiem co napisać, jakaś treść czegoś',
                img:"mnie lin`ky to szukać",
                postId: 4
            }
        ]
    })
    console.log(comment)
}

// Удаления коммента по id
async function deleteComment() {
    const comment = await prisma.comment.delete({
        where: {
            id: 1
        }
    })
    console.log(comment)
}

// Поиск коммента по id
async function findComment() {
    const comment = await prisma.comment.findUnique({
        where: {
            id: 4
        }
    })
    console.log(comment)
}

// Поиск коммента по id с выводом информации о посте
async function findCommentAndPost(){
    const comment = await prisma.comment.findUnique({
        where: {
            id: 4
        },
        include: {
            Post: true
        }
    })
    console.log(comment)
}

// Обновление коммента
async function updateComment() {
    const comment = await prisma.comment.update({
        where: {
            id: 3
        },
        data: {
            header: 'Updated Comment'
        }
    })
    console.log(comment)

}



// доп задание
async function getCommentsFromPosts(){
    
}

async function createPostWithComments(){
    
}

async function main() {
    await createPost()
    await createPosts()
    await findPost()
    // await findPosts()
    await updatePost()
    await deletePost()
    await createComment()
    await createComments()
    await findComment()
    await findCommentAndPost()
    await deleteComment()
    await updateComment()
}

main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})