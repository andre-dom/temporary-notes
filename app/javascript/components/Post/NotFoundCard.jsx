import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from  'react-bootstrap'

const NotFoundCard = (params) => {

        return (
            <Card className="mx-5 mt-5 w-75">
                <Card.Body>
                    Post not found
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Link to="/">Home</Link>
                </Card.Footer>
            </Card>
        )
}

export default NotFoundCard