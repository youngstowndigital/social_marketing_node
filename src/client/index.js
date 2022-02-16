import React from "react"
import ReactDOM from "react-dom"
import PostsPage from "./containers/PostsPage"
import PostsProvider from './context/PostsContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "react-bootstrap"

ReactDOM.render(
    <Container>
        <PostsProvider>
            <PostsPage />
        </PostsProvider>
    </Container>,
    document.getElementById('root')
)
