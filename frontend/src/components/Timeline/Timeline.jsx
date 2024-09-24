import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './Timeline.css'
import { getPostsApi } from '../../services/postServices'
import {useQuery} from '@tanstack/react-query'

const Timeline = () => {
  const {user} = useSelector((state) => state?.auth?.user)

  const {data:posts, isError, isLoading, isFetched, error} = useQuery({
    queryFn: ()=> getPostsApi(),
    queryKey: ['list-posts']
  })

  return (
    <div className = 'body'>
      <div className = 'left-bar'>
        <Link>{user && user.username ? user.username : 'guest'}</Link>
        <Link>Images</Link>
        <Link>Friends</Link>
        <Link>Posts</Link>
      </div>
      <div className = 'timeline'>
        <h1>Timeline</h1>
        {posts.allPosts?.map((post) => (
          <p>{post.content}</p>
        ))}
      </div>
      <div className = 'right-bar'>
        <p>This is where my friends list is</p>
      </div>
    </div>
  )
}

export default Timeline