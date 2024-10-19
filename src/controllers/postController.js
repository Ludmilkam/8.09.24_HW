"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const postService = require('../services/postService')
const postService_1 = __importDefault(require("../services/postService"));
function getPostById(req, res) {
    const id = +req.params.id;
    console.log(id);
    const context = postService_1.default.getPostById(id);
    res.render('post', context);
}
function getAllPosts(req, res) {
    // console.log(req.query)
    // сделать проверку на undefined
    // const max = req.query.max === undefined ? 1 : +req.query.max
    // const context = postService.getAllPosts(max)
    // console.log(req.query.max)
    const max = req.query.max;
    const context = postService_1.default.getAllPosts(req.query.max ? +req.query.max : undefined);
    // const context = postService.getAllPosts(+req.query.max)
    res.render('posts', context);
}
function createPost(req, res) {
    console.log(req.body);
    const post = req.body;
    const msg = postService_1.default.createPost(post);
    res.send(msg);
}
const postControllers = {
    getPostById: getPostById,
    getAllPosts: getAllPosts,
    createPost: createPost
};
exports.default = postControllers;
