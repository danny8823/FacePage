const asyncHandler = require('express-async-handler')
const Post = require('../model/PostModel')

const postController = {
    post: asyncHandler(async(req,res) => {
        const {title,author,dateTime, content} = req.body
        
        if(!title || !author || !dateTime || !content)  {
            throw new Error ("All fields are required to post")
        }

        const newPost = await Post.create({
            title,
            author,
            dateTime,
            content
        })

        res.json({
            message: 'Post created',
            newPost
        })
    }),
    listAllPost: asyncHandler(async(req,res) => {
        const allPosts = await Post.find()
        res.json({
            allPosts
        })
    }),
    deletePost: asyncHandler(async(req,res) => {
        const {_id} = req.body
        const postToDelete = await Post.findByIdAndDelete(_id)

        res.json({
            postToDelete,
            message: "Post deleted"
        })
    })
}

module.exports = postController