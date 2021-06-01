import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { Container } from  'react-bootstrap'
import Post from './Post/Post'
import NewPost from './Post/NewPost'
import GithubImage from 'images/github.svg'

const App = () => {
    return (
    <Container className="d-flex flex-column align-items-center">
        <a style={{
            position: 'absolute',
            right: 5,
            top: 5,
        }} href="https://github.com/andre-dom/temporary-notes" target="_blank" >
              <img src={GithubImage} alt="Github" width="50" height="50"/>
          </a>


        <Switch>
            <Route exact path='/' component={NewPost}/>
            <Route exact path='/posts/:uuid' component={Post}/>
            <Route component={NewPost} />
        </Switch>
    </Container>
    )
}

export default App