import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'; 
import Posts from '../Posts/Posts.js'
import NewPost from '../NewPost/NewPost.js'
import './Blog.css';
import FullPost from '../FullPost/FullPost.js'

class Blog extends Component {
    

    deletePostHandler = () => {
        axios.delete('/posts/' + this.state.SelectedPostId).then(response => {
            this.setState({
                selectedPostId: null
            })
        })

    }

    
    render () {
        return (
            <div className="Blog"> 
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact >Home</NavLink></li>
                            <li><NavLink to="/new-post" exact >New Post</NavLink></li>
                        </ul>
                    </nav>
                </header> 
                <Switch>
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/post" component={Posts} />
                    <Redirect from="/" to="/post" />
                </Switch>
            </div>
        );
    }
}

export default Blog;