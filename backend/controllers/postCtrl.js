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
    listOne: asyncHandler(async(req,res) => {
        const {_id} = req.body

        const post = await Post.findById(_id)

        res.json({
            post
        })
    }),
    deletePost: asyncHandler(async(req,res) => {
        const {_id} = req.body
        const postToDelete = await Post.findByIdAndDelete(_id)

        res.json({
            postToDelete,
            message: "Post deleted"
        })
    }),
    editPost: asyncHandler(async(req,res) => {
        const {id,newContent} = req.body
        try {
            const postToUpdate = await Post.findOneAndUpdate(
                {_id: id},
                {content: newContent},
                {new: true}
            )
            res.json({
                message: 'Update success',
                postToUpdate
            })
        } catch(err) {
            throw new Error(err.message)
        }
    })
}

module.exports = postController