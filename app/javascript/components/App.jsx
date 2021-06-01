import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from  'react-bootstrap'
import Post from './Post/Post'
import NewPost from './Post/NewPost'

const App = () => {
    return (
    <Container className="d-flex flex-column align-items-center">
        <Switch>
            <Route exact path='/' component={NewPost}/>
            <Route exact path='/posts/:uuid' component={Post}/>
            <Route component={NewPost} />
        </Switch>
    </Container>
    )
}

export default App