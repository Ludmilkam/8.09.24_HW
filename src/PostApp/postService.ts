
// це не моє
// В сервисе хранится логика работы которую хендлер просто вызывает и возвращает результат по http
// Например в сервисе может определяться логика (набор действий) которая произойдет при добавлении поста
// К примеру это может быть сохранение в бд после которого идет оповещение всех пользователей по email
// и вместо того что бы писать подобную логику в обработчике, ее следует писать именно в так называемый слой бизнес логики (наш сервис)
// Логика в сервисе ни от чего не зависит и к примеру если вы захотите создать вдобавок к вебсайту десктоп приложение,
// оно будет переиспользовать все ту же логику

//  це моє
/*
у сервісі прописуємо логіку роботи сторінок.
Сервіс відповідає за приняття запроса та відправки відповіді з данними

*/
// import postRepository from "./postRepository"
import postRepository from "./postRepository"


async function getPostById (id:number) {
    console.log(id)
    const context = {
        post: await postRepository.getPostById(id),
    }
    return context
}
async function getAllPosts (max? :number) {
    // if (!max) {
    //     max = posts.length
    // }
    console.log(max)
    const context = {
        posts: await postRepository.getAllPosts()
    }
    console.log(context)
    return context
}

async function createPost(post:{
    name: string,
    description:string | undefined,
    time_publicated: number | undefined,
    author: string 
}){
    const createdPost = await postRepository.createPost(post)
    return "Hello woda"
}


async function deletePost(post:{
    name: string,
    description:string | undefined,
    time_publicated: number | undefined,
    author: string,
    id: number
}){

}

const postService = {
    getPostById: getPostById, 
    getAllPosts: getAllPosts,
    createPost: createPost,
    deletePost: deletePost 
}

export default postService
// export{getPostById, getAllPosts, createPost}