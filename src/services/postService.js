// В сервисе хранится логика работы которую хендлер просто вызывает и возвращает результат по http
// Например в сервисе может определяться логика (набор действий) которая произойдет при добавлении поста
// К примеру это может быть сохранение в бд после которого идет оповещение всех пользователей по email
// и вместо того что бы писать подобную логику в обработчике, ее следует писать именно в так называемый слой бизнес логики (наш сервис)
// Логика в сервисе ни от чего не зависит и к примеру если вы захотите создать вдобавок к вебсайту десктоп приложение,
// оно будет переиспользовать все ту же логику


const posts = [
    {
    id:"1",
    name: 'post1',
    description:" просто пост",
    time_publicated:"сегодня",
    author: 'Author1 '
    },
    {
    id:"2",
    name: 'post2',
    description:" it`s my birthday",
    time_publicated:"29.09",
    author: 'Author2'
    }
]

function getDate () {
    return "date"
}

function getPostById (id) {
    console.log(id)
    const context = {
        post:posts[id-1],
    }
    return context
}
function getAllPosts (max) {
    const context = {
        posts:posts.slice(0, max)
    }
    return context
}

function createPost(post) {;
    posts.push(post)
    return "Hello woda"
}

module.exports = {
    getDate: getDate,
    getPostById: getPostById, 
    getAllPosts: getAllPosts,
    createPost: createPost 
}