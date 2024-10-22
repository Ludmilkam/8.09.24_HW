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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const postService = require('../services/postService')
const postService_1 = __importDefault(require("./postService"));
function getPostById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = +req.params.id;
        console.log(id);
        const context = yield postService_1.default.getPostById(id);
        res.render('post', context);
    });
}
function getAllPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log(req.query)
        // сделать проверку на undefined
        // const max = req.query.max === undefined ? 1 : +req.query.max
        // const context = postService.getAllPosts(max)
        // console.log(req.query.max)
        const max = req.query.max;
        const context = yield postService_1.default.getAllPosts(req.query.max ? +req.query.max : undefined);
        // const context = postService.getAllPosts(+req.query.max)
        res.render('posts', context);
    });
}
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        const post = req.body;
        const msg = postService_1.default.createPost(post);
        res.send(msg);
    });
}
const postControllers = {
    getPostById: getPostById,
    getAllPosts: getAllPosts,
    createPost: createPost
};
exports.default = postControllers;
