import React from "react"
import ReactDOM from "react-dom"
import PostsPage from "./containers/PostsPage";
import PostsProvider from './context/PostsContext';

ReactDOM.render(
    <PostsProvider>
        <PostsPage />
    </PostsProvider>,
    document.getElementById('root')
)
