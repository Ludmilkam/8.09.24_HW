"use strict";
// це не моє
// В сервисе хранится логика работы которую хендлер просто вызывает и возвращает результат по http
// Например в сервисе может определяться логика (набор действий) которая произойдет при добавлении поста
// К примеру это может быть сохранение в бд после которого идет оповещение всех пользователей по email
// и вместо того что бы писать подобную логику в обработчике, ее следует писать именно в так называемый слой бизнес логики (наш сервис)
// Логика в сервисе ни от чего не зависит и к примеру если вы захотите создать вдобавок к вебсайту десктоп приложение,
// оно будет переиспользовать все ту же логику
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
const posts = [
    {
        id: 1,
        name: 'post1',
        description: " просто пост",
        time_publicated: "сегодня",
        author: 'Author1 '
    },
    {
        id: 2,
        name: 'post2',
        description: " it`s my birthday",
        time_publicated: "29.09",
        author: 'Author2'
    }
];
function getPostById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(id);
        const context = {
            post: posts[id - 1],
        };
        return context;
    });
}
function getAllPosts(max) {
    return __awaiter(this, void 0, void 0, function* () {
        // if (!max) {
        //     max = posts.length
        // }
        console.log(max);
        const context = {
            posts: yield posts.slice(0, max)
        };
        console.log(context);
        return context;
    });
}
function createPost(post) {
    return __awaiter(this, void 0, void 0, function* () {
        yield posts.push(post);
        return "Hello woda";
    });
}
const postService = {
    getPostById: getPostById,
    getAllPosts: getAllPosts,
    createPost: createPost
};
exports.default = postService;
// export{getPostById, getAllPosts, createPost}
