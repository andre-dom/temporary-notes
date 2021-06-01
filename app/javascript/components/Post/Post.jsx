import React, {useState, useEffect } from 'react'
import Axios from 'axios'
import { Card, Spinner, Button } from  'react-bootstrap'
import PostCard from './PostCard'
import NotFoundCard from './NotFoundCard'

const Post = (props) => {
    const [post, setPost] = useState()
    const [loaded, setLoaded] = useState(false)

    const uuid = props.match.params.uuid

    useEffect(async()=> {
        await Axios.get(`/api/posts/${uuid}`)
        .then( resp => {
            setPost(resp)
            setLoaded(true)
        },[])
        .catch( resp => {
            setLoaded(true)
        })
    }, [])

    if(!loaded) {
        return(
            <Card className="mx-5 mt-5 w-75">
                <Card.Body className="d-flex justify-content-center">
                    <Spinner animation="border" variant="primary" />
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <p> </p>
                </Card.Footer>
            </Card>
        )
    }

    if(loaded) {
        if(post == null) {
            return (loaded && <NotFoundCard/>)
        }
        return(loaded && <PostCard post={post}/>)
    }

}

export default Post