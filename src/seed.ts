import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Создание 1 поста 
async function createPost(){
    const post = await prisma.post.create({
        data: {
            name: 'post3',
            author: 'Author3'
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
                postId: 2
        }
    })
    console.log(comment)
}
// Создание множеста комментов
async function createComments(){
    const comment = await prisma.comment.createMany({
        data: [
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
                postId: 3
            },
            {
                header: 'Comment4',
                body:'Nie wiem co napisać, jakaś treść czegoś',
                img:"mnie lin`ky to szukać",
                postId: 4
            },
            {
                header: 'Comment5',
                body:'Nie wiem co napisać, jakaś treść czegoś',
                img:"mnie lin`ky to szukać",
                postId: 4
            },
            {
                header: 'Comment6',
                body:'Nie wiem co napisać, jakaś treść czegoś',
                img:"mnie lin`ky to szukać",
                postId: 5
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
// Создать сид, который подключает уже существующие комментарии к уже существующим постам
async function connectCommentsFromPosts(){
    const comment = await prisma.comment.updateMany({
        where: {
          postId: 1,  
        },
        data: {
          postId: 2, 
        },
      });
}

// Создать сид, который создает пост и к нему сразу же множеством комментариев(использование только одного запроса в бд)
async function createPostWithComments(){
    const newPost = await prisma.post.create({
        data: {
          name: 'New post',
          description: 'Jakaś treść',
          author:"Ja",
          comments: {
            create: [
              { header:"jakiś naglówek", body: 'pierwszy koment' },
              { header:"jakiś naglówek", body: 'drugi koment' },
              { header:"jakiś naglówek", body: 'trzeci koment' },
            ],
          },
        },
        include: {
          comments: true, 
        },
      });
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
    await connectCommentsFromPosts()
    await createPostWithComments()
}

main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})