import React from 'react'
import firebase, { db } from '../config/firebaseconfig'


class CreateBlogPage extends React.Component{
    state = {
        title: '',
        content: '',
        author: '',
        summary: '',
    }

    handleOnChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newPost = {
            ...this.state,
            created: firebase.firestore.Timestamp.now()
        }
        db.collection('blogs').add(newPost).then(()=>{
            this.props.history.replace('/blogs')
            
        })
    }
        
    


    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <h3>Create Blog</h3>

                    <div style = {{marginBottom: "40px"}}>
                        <label>Title</label>
                        <input type="text" name="title" onChange = {this.handleOnChange}/>
                    </div>

                    <div style = {{marginBottom: "40px"}}>
                        <label>Summary</label>
                        <textarea type="text" name="summary" onChange = {this.handleOnChange}/>
                    </div>
                    
                    <div style = {{marginBottom: "40px"}}>
                        <label>Content</label>
                        <textarea type="text" name="content" onChange = {this.handleOnChange}/>
                    </div>
                    
                    <div style = {{marginBottom: "40px"}}>
                        <label>Author</label>
                        <input type="text" name="author" onChange = {this.handleOnChange}/>
                    </div>

                    <div>
                        <input type="submit" value="submit"/>
                    </div>
                    
                </form>
            </div>
        )
    }
}




export default (CreateBlogPage)