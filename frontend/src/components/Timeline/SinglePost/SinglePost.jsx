import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getPostAPI } from '../../../services/postServices'
import { Card } from 'react-bootstrap'
import { getCommentsAPI } from '../../../services/commentServices'
import './SinglePost.css'
import PostComments from '../Comments/PostComments'
import { useSelector } from 'react-redux'
const SinglePost = () => {

    const {user} = useSelector((state) => state?.auth?.user)
    const {_id} = useParams()
    
    const {data: postData} = useQuery({
        queryFn: () => getPostAPI(_id),
        queryKey: ['post',_id]
    })
    
    const {data: commentData, isError, isLoading, error} = useQuery({
      queryFn:() => getCommentsAPI(_id),
      queryKey: ['comment', _id]
    })
  
    console.log('this is comment data ===>', commentData)
  if(postData) {
    const {post} = postData

    return (
      <div className = 'single-post-body'>
        <Card className = 'single-post-card'>
          <Card.Header>
            {post && post.title ? post.title : <p>No data</p>} by 
            <img className = 'single-post-user-img' src = {post.author?.image} alt = 'user'/>
            {post && post.author ? post.author.username : <p>No user data</p>}
          </Card.Header>
          <Card.Body>{post && post.content ? post.content : <p>No data</p>}</Card.Body>
        </Card>
        <PostComments postId = {post._id} authorId = {user._id}/>
        {commentData?.map((comment)=>(
          <Card className = 'comment-card' key = {comment._id}>
            <Card.Body>
              {comment.comment}
            </Card.Body>
            <Card.Footer>
              Comment by - 
              {comment.author && comment.author.username ? comment.author.username : <span>Guest</span>}
            </Card.Footer>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div>
      <h1>No post data</h1>
    </div>
  )
}

export default SinglePost