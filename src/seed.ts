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


// Обновления данных о 1 посте
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
// Получение данных о одном посте
async function findPost() {
    const post = await prisma.post.findUnique({
        where: {
            id: 4
        }
    })
    console.log(post)
}
// Получение данных о множестве постoв
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

async function main() {
    await createPost()
    await createPosts()
    await findPost()
    // await findPosts()
    await updatePost()
    await deletePost()
}

main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})