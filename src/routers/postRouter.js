"use strict";
/*
у роутері прописуємо шляхи за якими ми будемо знаходити сторінки

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express")
const express_1 = require("express");
// const postControllers = require("../controllers/postController")
const postController_1 = __importDefault(require("../controllers/postController"));
const router = (0, express_1.Router)();
router.get("/all", postController_1.default.getAllPosts);
router.post("/create", postController_1.default.createPost);
router.get("/:id", postController_1.default.getPostById);
// module.exports = router
exports.default = router;
