import axios from "axios";
import { BASE_URL } from "../utils/url";

export const getCommentsAPI = async(_id) => {
    const response = await axios.get(`${BASE_URL}/comment/list-comments-by-post`,{ params: {_id}})
    return response.data
}