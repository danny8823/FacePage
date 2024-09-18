const express = require('express')
const postController = require('../controllers/postCtrl')
const postRouter = express.Router()

postRouter.post('/api/v1/post/create-post', postController.post)
postRouter.get('/api/v1/post/list-all', postController.listAllPost)
postRouter.delete('/api/v1/post/delete-post',postController.deletePost)
module.exports = postRouter