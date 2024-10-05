const postService = require('../services/postService')

function getDate (req,res) {
    console.log(date())
    res.send(date())
}

function getPostById (req, res) {
    const id = req.params.id
    console.log(id)
    const context = postService.getPostById(id)
    res.render('post', context)
}
function getAllPosts (req, res) {
    console.log(req.query)
    const context = postService.getAllPosts(req.query.max)
    res.render('all', context)
}

function createPost(req,res) {
    console.log(req.body);
    const post = req.body
    const msg = postService.createPost(post)
    res.send(msg)
}
module.exports = {
    getDate: getDate,
    getPostById: getPostById, 
    getAllPosts: getAllPosts,
    createPost: createPost 
}