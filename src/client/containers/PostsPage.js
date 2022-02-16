import React, { useContext, useEffect, useState } from 'react'
import { PostsContext } from '../context/PostsContext'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const PostsPage = () => {
    const { loadPosts, posts, errors, addPost } = useContext(PostsContext)
    const [ formData, setFormData ] = useState({
        text: '',
        schedule: ''
    })

    useEffect(() => {
        loadPosts()
    }, [])

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addPost(formData)
        setFormData({ text: '', schedule: '' })
    }

    return (
        <div className="my-3">
            {
                errors.map((error, index) =>
                    <Alert variant="danger" key={index}>{ error.msg }</Alert>
                )
            }
            <Form onSubmit={onSubmit} className="my-3">
                <Form.Label>Text</Form.Label>
                <Form.Control 
                    type="text"
                    onChange={onChange}
                    value={formData.text}
                    id="text"
                    ></Form.Control>

                <Form.Label>Schedule</Form.Label>
                <Form.Control 
                    type="datetime-local"
                    onChange={onChange}
                    value={formData.schedule}
                    id="schedule"></Form.Control>
                <Button variant="primary" type="submit" className="my-3">Save</Button>
            </Form>
            { 
                posts.map((post, index) => 
                    <Card className="my-3" key={index}>
                        <Card.Body>
                            <Card.Title>{ post.text }</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            { post.schedule }
                        </Card.Footer>
                    </Card>
                ) 
            }
        </div>
    )
}

export default PostsPage
