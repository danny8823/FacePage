const asyncHandler = require('express-async-handler')
const Comment = require('../model/CommentModel')
const Post = require('../model/PostModel')
const User = require('../model/UserModel')

const commentControl = {
    postComment : asyncHandler(async(req,res) => {
        const {comment,postId,authorId} = req.body

        if(!comment || !postId || authorId) {
            res.json({
                error: 'Please fill out all fields'
            })
        }

        const commentAuthor = await User.findById(authorId)
        const thePost = await Post.findById(postId)

        const newComment = await Comment.create({
            comment,
            post: postId,
            author: authorId
        })

        
        res.json({
            message: 'Comment posted',
            newComment,
            author: commentAuthor,
            post: thePost
        })
    })
}

module.exports = commentControl