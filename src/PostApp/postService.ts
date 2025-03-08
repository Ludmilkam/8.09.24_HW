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

import { IError, IOk, IOkWithData } from "../types/types";
import postRepository from "./postRepository";
import { CreatePost, PostWithTag } from "./types";

async function getPostById(id: number): Promise<IOkWithData<PostWithTag> | IError> {
    const res = await postRepository.getPostById(id);
    if (res === null) {
        return {
            status: "error",
            message: "Post is not found",
        };
    }

    if (typeof res === "string") {
        return { status: "error", message: res };
    }
    return {
        status: "ok",
        data: res,
    };
}
async function getAllPosts(): Promise<IOkWithData<PostWithTag[]> | IError> {
    const res = await postRepository.getAllPosts();

    if (res === null) {
        return {
            status: "error",
            message: "Post is not found",
        };
    }

    if (typeof res === "string") {
        return { status: "error", message: res };
    }
    return {
        status: "ok",
        data: res,
    };
}

async function createPost(post: CreatePost): Promise<IOk | IError> {
    const res = await postRepository.createPost(post);
    if (!res){
        return {
            status: "error",
            message: "Post not created "
        }
    }
    if (typeof res === "string") {
        return { status: "error", message: res };
    }

    return {
        status: "ok",
        message: "Successfuly created post",
    };
}

async function deletePost(post: CreatePost) {}

const postService = {
    getPostById: getPostById,
    getAllPosts: getAllPosts,
    createPost: createPost,
    deletePost: deletePost,
};

export default postService;