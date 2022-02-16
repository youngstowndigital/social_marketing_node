import React, { createContext, useState } from 'react'
import API from '../apiUtil';

export const PostsContext = createContext();

const PostsProvider = ({ children }) => {
    const [posts, setPosts] =  useState([])
    const [errors, setErrors] = useState([]);

    const api = new API('posts')

    const loadPosts = async () => {
        try {
            setPosts(await api.getAll())
        } catch (error) {
            setErrors(error.response.data.errors)
            setTimeout(() => {
                setErrors([])
            }, 3000)
        }
    }

    const addPost = async (body) => {
        try {
            const newPost = await api.create(body)
            setPosts([newPost, ...posts])
        } catch (error) {
            setErrors(error.response.data.errors)
            setTimeout(() => {
                setErrors([])
            }, 3000)
        }
    }

    const removePost = async (id) => {
        try {
            await api.delete(id);
            setPosts(posts.filter(post => post._id !== id))
        } catch (error) {
            setErrors(error.response.data.errors)
            setTimeout(() => {
                setErrors([])
            }, 3000)
        }
    }

    return (
        <PostsContext.Provider value={{ posts, errors, removePost, loadPosts, addPost }}>
            { children }
        </PostsContext.Provider>
    )
}

export default PostsProvider
