import React from 'react'
import BlogDetail from '../blogdetail/blogdetail.js'
import firebase, { db } from '../config/firebaseconfig.js'



class BlogDetailPage extends React.Component{
    state = {
        blog: {}
    }

    componentDidMount(){
        const id = this.props.match.params.id
        db.collection('blogs').where(firebase.firestore.FieldPath.documentId(), '==', id).onSnapshot(snapshot => {
        let blog
        snapshot.forEach(doc => {
            blog = doc.data()
        })
        this.setState({
            ...this.state,
            blog: blog
        })
        console.log(this.state)
    }
        )
        
        
}

    render(){
        let body
        if (this.state.blog){
            body = (
                <BlogDetail title = {this.state.blog.title}
                        content = {this.state.blog.content}
                        id = {this.state.blog.id}
                        author = {this.state.blog.author}
                        />
            )
        }
        else{
            body = null
        }
        return(
            body
        ) 
    }
    
}



export default (BlogDetailPage)