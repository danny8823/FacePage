import React from 'react'
import Navbar from '../Timeline/Navbar/Navbar'
import './Dashboard.css'
import { Button } from 'react-bootstrap'
import { useQuery } from '@tanstack/react-query'
import { getPostsByAuthorAPI } from '../../services/postServices'

const Dashboard = ({user}) => {
    console.log(user._id)
    const {data: post, isError, isLoading, error} = useQuery({
        queryFn: () => getPostsByAuthorAPI(user._id),
        queryKey: ['post', user._id]
    })

    console.log(post)


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
                
            </div>
        </div>
    </div>
  )
}

export default Dashboard