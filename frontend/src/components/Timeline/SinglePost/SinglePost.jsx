import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getPostAPI } from '../../../services/postServices'
import { Card } from 'react-bootstrap'
import { getCommentsAPI } from '../../../services/commentServices'

const SinglePost = () => {
    const {_id} = useParams()
    
    const {data: postData} = useQuery({
        queryFn: () => getPostAPI(_id),
        queryKey: ['post',_id]
    })
    
    const {data: commentData, isError, isLoading, error} = useQuery({
      queryFn:() => getCommentsAPI(_id),
      queryKey: ['comment', _id]
    })

    console.log('comment data', commentData)
  if(postData) {
    const {post} = postData

    return (
      <div>
        <Card>
          <Card.Header>{post && post.title ? post.title : <p>No data</p>} by {post && post.author ? post.author.username : <p>No user data</p>}</Card.Header>
          <Card.Body>{post && post.content ? post.content : <p>No data</p>}</Card.Body>
        </Card>
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