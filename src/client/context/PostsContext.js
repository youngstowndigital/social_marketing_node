import React, { createContext, useState } from 'react'
import { createPost, getPosts } from '../apiUtil';

export const PostsContext = createContext();

const PostsProvider = ({ children }) => {
    const [posts, setPosts] =  useState([])
    const [errors, setErrors] = useState([]);

    const loadPosts = async () => {
        try {
            setPosts(await getPosts())
        } catch (error) {
            setErrors(error.response.data.errors)
        }
    }

    const addPost = async (body) => {
        try {
            const newPost = await createPost(body)
            setPosts([newPost, ...posts])
        } catch (error) {
            setErrors(error.response.data.errors)
            setTimeout(() => {
                setErrors([])
            }, 3000)
        }
    }

    return (
        <PostsContext.Provider value={{ posts, errors, loadPosts, addPost }}>
            { children }
        </PostsContext.Provider>
    )
}

export default PostsProvider
