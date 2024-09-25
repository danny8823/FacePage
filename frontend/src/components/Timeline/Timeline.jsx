import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './Timeline.css'
import { getPostsApi } from '../../services/postServices'
import {useQuery} from '@tanstack/react-query'
import Navbar from './Navbar/Navbar'
import PostCard from './PostCard/PostCard'
import {Card} from 'react-bootstrap'

const Timeline = ({user}) => {

  const {data:posts, isError, isLoading, error} = useQuery({
    queryFn: ()=> getPostsApi(),
    queryKey: ['list-posts']
  })


  return (
    <>
    <Navbar/>
      <div className = 'body'>
        <div className = 'left-bar'>
          <Link><img className = 'user-img' src = {user.image} alt = 'face-image'/>{user && user.username ? user.username : 'guest'}</Link>
          <Link>Images</Link>
          <Link>Friends</Link>
          <Link>Posts</Link>
        </div>
        <div className = 'timeline'>
          {isLoading && <p>Loading posts....</p>}
          {isError && <p>{error.message}</p>}
          <PostCard user = {user}/>
            {posts?.map((post) => (
              <Card key = {post._id} className = 'post'>
                <Card.Header>
                  <img className = 'user-img' src = {user.image} alt = 'face-image'/>
                  {post.author.username}
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    {post.title}
                  </Card.Title>
                  <Card.Text>
                    {post.content}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
        </div>
        <div className = 'right-bar'>
          <p>This is where my friends list is</p>
        </div>
      </div>
    </>
  )
}

export default Timeline