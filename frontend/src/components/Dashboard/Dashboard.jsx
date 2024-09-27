import React from 'react'
import Navbar from '../Timeline/Navbar/Navbar'
import './Dashboard.css'
import { Button, Card } from 'react-bootstrap'
import { useQuery } from '@tanstack/react-query'
import { deletePostAPI, getPostsByAuthorAPI } from '../../services/postServices'
import { useDispatch, useSelector } from 'react-redux'

const Dashboard = () => {
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state?.auth?.user)
    const {data: post, isError, isLoading, error} = useQuery({
        queryFn: () => getPostsByAuthorAPI(user._id),
        queryKey: ['post', user._id]
    })

    const deleteButtonHandler = (id) => {
        deletePostAPI(id)
        window.location.reload()
    }
    return (
    <div>
        <Navbar/>
        <div className = 'dashboard-body'>
            <div className = 'profile-card'>
                <p>Username: {user.username}</p>
                <Button variant = 'outline-secondary'>Change username</Button>
                <p>Email: {user.email}</p>                
                <Button variant = 'outline-secondary'>Change email</Button>
                <Button variant = 'outline-secondary'>Change password</Button>
                <img src = {user?.image} alt ='profile'/>
                <Button variant = 'outline-secondary'>Change profile picture</Button>
            </div>
            <div className = 'user-posts-container'>
                {post?.map((item) => (
                    <Card key = {item._id} className = 'dashboard-post-card'>
                        <Card.Title className = 'card-title-container'>
                            <span>
                                {item.title} 
                            </span>
                            <span className = 'post-date'>{new Date(item.createdAt).toLocaleString()}</span>
                        </Card.Title>
                        <Card.Body>
                            {item.content}
                        </Card.Body>
                        <Card.Footer>
                            <Button variant='outline-primary' onClick={()=>deleteButtonHandler(item._id)}>Delete</Button>
                        </Card.Footer>
                    </Card>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Dashboard