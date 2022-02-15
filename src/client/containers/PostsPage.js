import React, { useContext, useEffect } from 'react'
import { PostsContext } from '../context/PostsContext'

const PostsPage = () => {
    const { loadPosts, posts } = useContext(PostsContext)

    useEffect(() => {
        loadPosts()
    }, [])

    return (
        <div>
            { posts.map((post, index) => <div key={index}><p>{ post.text }</p><p>{ post.schedule }</p></div>) }
        </div>
    )
}

export default PostsPage
