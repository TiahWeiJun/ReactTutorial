import React from 'react'
import axios from 'axios'
import Post from '../../components/Post/Post.js'
import './Posts.css'
import {Link} from 'react-router-dom'
import { Route } from 'react-router-dom'
import FullPost from '../FullPost/FullPost.js'

class Posts extends React.Component{
    state = {
        posts: [],
    }


    componentDidMount() {
        axios.get('/posts').then(response => {
            const posts = response.data.slice(0, 4)
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            })
            this.setState({
                posts: updatedPosts
            })
        })
    }

    render(){
        const posts = this.state.posts.map(post => {
            return <Link to={'/post/' + post.id} key = {post.id} >
                        <Post 
                         title = {post.title} 
                         author = {post.author}
                         />
                   </Link>
        })
        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path="/post/:id" exact component = {FullPost} />
            </div>
                
        )
    }
}

export default Posts