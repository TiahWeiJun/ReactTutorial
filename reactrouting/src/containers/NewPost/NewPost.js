import React, { Component } from 'react';
import axios from 'axios'
import './NewPost.css';
import {Redirect} from 'react-router-dom'

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false,
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
        this.setState({
            submitted: true
        })
    }

    render () {
        const redirect = this.state.submitted ? <Redirect to="/posts" /> : null
        let button
        if (this.state.title.length !== 0 && this.state.content.length !== 0){
            button = <button onClick = {this.postDataHandler}>Add Post</button>
        }
        else{
            button = <button disabled>Add Post</button>
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input required type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea required rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                {button}
            </div>
        );
    }
}

export default NewPost;