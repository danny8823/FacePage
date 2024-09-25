import axios from "axios";
import { BASE_URL } from "../utils/url";

export const getCommentsAPI = async({postId}) => {
    const response = await axios.get(`${BASE_URL}/api/v1/comment/list-comments-by-post`,{postId})
    return response.data
}