import React from 'react'
import Navbar from '../Timeline/Navbar/Navbar'
import './Dashboard.css'
import { Button, Card } from 'react-bootstrap'
import { useQuery } from '@tanstack/react-query'
import { getPostsByAuthorAPI } from '../../services/postServices'

const Dashboard = ({user}) => {

    const {data: post, isError, isLoading, error} = useQuery({
        queryFn: () => getPostsByAuthorAPI(user._id),
        queryKey: ['post', user._id]
    })

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
            <div>
                {post?.map((item) => (
                    <Card key = {item._id} className = 'dashboard-post-card'>
                        <Card.Title>
                            {item.title}
                        </Card.Title>
                        <Card.Body>
                            {item.content}
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Dashboard