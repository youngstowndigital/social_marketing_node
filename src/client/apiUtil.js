import axios from "axios"

export const getPosts = async () => {
    const result = await axios.get('http://localhost:5000/posts')
    return result.data
}
