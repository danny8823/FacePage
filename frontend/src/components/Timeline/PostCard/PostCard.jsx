import React from 'react'
import './PostCard.css'

const PostCard = ({user}) => {
  return (
    <div className = 'post-input-body'>
      <div className = 'post-card'>
        <img className = 'post-user-img' src = {user.image} alt = 'user'/>
        <button>Whats on your mind, {user.username}?</button>
      </div>
    </div>
    
  )
}

export default PostCard