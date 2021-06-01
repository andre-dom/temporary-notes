import React, {useState, Fragment} from 'react'
import Axios from 'axios'
import { Form, Button } from 'react-bootstrap'

const NewPost = () => {

    const [content, setContent] = useState([])
    const [delete_in, setDelete_In] = useState(10);

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        Axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        Axios.post('/api/posts', {content, delete_in})
        .then(resp => {
            console.log(resp.data.data.attributes.uuid)
            document.location = "/posts/" + resp.data.data.attributes.uuid
        })
        .catch( data => {
            console.log(data)
        })
    }

    return (
        <Fragment>
            <div className="w-75">
                <Form className='mt-5' onSubmit={handleSubmit}>
                    <Form.Group controlId="postForm.Textarea" required>
                        <Form.Label>New Note</Form.Label>
                        <Form.Control size="lg" as="textarea" placeholder="Type here" maxLength="300" onChange={e => setContent(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='mt-3' controlId="postForm.timeRange">
                        <Form.Label>Delete in {delete_in} minutes</Form.Label>
                        <br/>
                        <Form.Control className='w-100' size='lg' size="lg" type="range" min="5" max="120" step='5' value={delete_in} onChange={e => setDelete_In(e.target.value)}/>
                    </Form.Group>
                    <Button className='mt-3' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Fragment>

    )
}

export default NewPost