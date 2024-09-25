import axios from 'axios'
import { BASE_URL } from '../utils/url'

export const getPostsApi = async() => {
    const response = await axios.get(`${BASE_URL}/post/list-all`)

    return response.data
}

export const getPostAPI = async(_id) => {
    console.log('api, _ID',_id)
    const response = await axios.get(`${BASE_URL}/post/list-one/${_id}`)
    console.log('api', response.data)
    return response.data
}

export const postPostAPI = async({title,content,image,dateTime,author}) => {
    const response = await axios.post(`${BASE_URL}/post/create-post`,{
        title, content, image, dateTime, author
    })

    return response.data
}