import React, { createContext, useState } from 'react'
import { getPosts } from '../apiUtil';

export const PostsContext = createContext();

const PostsProvider = ({ children }) => {
    const [posts, setPosts] =  useState([])
    const [errors, setErrors] = useState([]);

    const loadPosts = async () => {
        try {
            setPosts(await getPosts())
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    return (
        <PostsContext.Provider value={{ posts, errors, loadPosts }}>
            { children }
        </PostsContext.Provider>
    )
}

export default PostsProvider
