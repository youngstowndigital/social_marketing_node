import axios from "axios"

export const getPosts = async () => {
    const result = await axios.get('http://localhost:5000/posts')
    return result.data
}

export const createPost = async (body) => {
    const result = await axios.post('http://localhost:5000/posts', body)
    return result.data
}
