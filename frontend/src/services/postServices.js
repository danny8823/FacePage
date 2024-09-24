import axios from 'axios'
import { BASE_URL } from '../utils/url'
export const getPostsApi = async() => {
    const response = await axios.get(`${BASE_URL}/post/list-all`)

    return response.data
}