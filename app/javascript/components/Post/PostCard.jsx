import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Card } from  'react-bootstrap'
import Countdown from 'react-countdown';

const PostCard = ( { post } ) => {
    console.log(post)
    console.log(new Date(post?.data.data.attributes.delete_in * 1000).toISOString().substr(11, 8))
    return (
            <Card className="mx-5 mt-5 w-75">
                <Card.Body>
                    {post?.data.data.attributes.content}
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <Link to="/">Home</Link>
                    <span>
                        Deletes in: <Countdown daysInHours date={Date.now() + (1000 * post?.data.data.attributes.delete_in)}>
                            <Redirect to="/" />
                        </Countdown>
                    </span>
                </Card.Footer>
            </Card>

    )
}

export default PostCard