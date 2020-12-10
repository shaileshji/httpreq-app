import React, { Component } from 'react';
//import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom'
import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent'
//import NewPosts from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'

const AsyncNewPost = asyncComponent( () => {
    return import('./NewPost/NewPost')
})

class Blog extends Component {
    
    
    render () {
        
        return (
            <div className="Blog">
                <header>
                    <ul>
                        <li><NavLink to="/" exact activeClassName="my-active" activeStyle={{
                            color: "#fa923f",
                            textDecoration: "underline"
                        }}>Home</NavLink></li>
                        <li><NavLink to={{
                            pathname: '/new-post',
                            hash: '#submit',
                            search: '?quick-submit=true'
                        }}>New Post</NavLink></li>
                    </ul>
                </header>
                {/*<Route path="/" exact render={ () => <h1>Home</h1>} />
                <Route path="/" exact render={ () => <h1>Home2</h1>} />*/}
                <Switch>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={AsyncNewPost} />
                <Route path="/:id" exact component={FullPost} />
                </Switch>
               
               
            </div>
        );
    }
}

export default Blog;