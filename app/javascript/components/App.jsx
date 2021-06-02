import React, { Fragment } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { Container } from  'react-bootstrap'
import Post from './Post/Post'
import NewPost from './Post/NewPost'
import GithubImage from 'images/github.svg'

const App = () => {
    return (
        <Fragment>
            <a style={{
                position: 'absolute',
                right: 5,
                top: 5,
            }} href="https://github.com/andre-dom/temporary-notes" target="_blank" rel="noopener">
              <img src={GithubImage} alt="Github" width="40" height="40"/>
            </a>
            <main>
                <Container className="d-flex flex-column align-items-center">
                    <Switch>
                        <Route exact path='/' component={NewPost}/>
                        <Route exact path='/posts/:uuid' component={Post}/>
                        <Route component={NewPost} />
                    </Switch>
                </Container>
            </main>
        </Fragment>
    )
}

export default App