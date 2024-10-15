
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


const posts :{
    id: number,
    name: string,
    description:string,
    time_publicated:string,
    author:string

}[] = [
    {
    id:1,
    name: 'post1',
    description:" просто пост",
    time_publicated:"сегодня",
    author: 'Author1 '
    },
    {
    id:2,
    name: 'post2',
    description:" it`s my birthday",
    time_publicated:"29.09",
    author: 'Author2'
    }
]



function getPostById (id:number) {
    console.log(id)
    const context = {
        post:posts[id-1],
    }
    return context
}
function getAllPosts (max? :number) {
    if (!max) {
        max = posts.length
    }
    console.log(max)
    const context = {
        posts:posts.slice(0, max)
    }
    console.log(context)
    return context
}

function createPost(post:{
    id: number,
    name: string,
    description:string,
    time_publicated: string,
    author: string 
}){
    posts.push(post)
    return "Hello woda"
}

const postService = {
    getPostById: getPostById, 
    getAllPosts: getAllPosts,
    createPost: createPost 
}

export default postService
// export{getPostById, getAllPosts, createPost}