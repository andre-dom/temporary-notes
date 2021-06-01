import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Card, Button } from  'react-bootstrap'
import Countdown from 'react-countdown'
import ClickToCopy from './ClickToCopy'

const PostCard = ( { post } ) => {
    return (
            <Card className="mx-5 mt-5 w-75">
                <Card.Body>
                    {post?.data.data.attributes.content}
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <Link to="/">Home</Link>
                    <ClickToCopy/>
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