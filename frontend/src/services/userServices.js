import axios from 'axios'
import { getUserFromStorage } from '../utils/getUserFromStorage'
import { BASE_URL } from '../utils/url'

const token = getUserFromStorage()

export const loginAPI = async({email,password}) => {
    const response = await axios.post(`${BASE_URL}/users/login`,{
        email,password
    })
    console.log('loginAPI', response.data)
    return response.data
}

export const registerAPI = async({
    username,
    password,
    email
}) => {
    const response = await axios.post(`${BASE_URL}/users/register`,{
        username,
        password,
        email
    })
    console.log('registerAPI', response.data)
    return response.data
}