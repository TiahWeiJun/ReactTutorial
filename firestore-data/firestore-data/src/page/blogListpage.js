import React from 'react';
import BlogSummary from '../blogsummary/blogsummary.js'
import {db} from '../config/firebaseconfig.js';


class BlogListPage extends React.Component {

  state = {
    blogs: [],
    authorFilter: '',
  }

  componentDidMount(){
      db.collection('blogs').orderBy("created", 'desc').onSnapshot(snapshot => {
        const blogs = []
        snapshot.forEach(doc => {
          let newdoc = {
            ...doc.data(),
            id: doc.id
          }
          blogs.push(newdoc)
  
        })
        this.setState({
          blogs: blogs
        })
      })
    

  }

  handleClickBlog = (id) => {
    this.props.history.push('/blogs/' + id)
  }

  handleOnChange = (e) =>{
    this.setState({
      ...this.state,
      authorFilter: e.target.value
    })
  }

  handleDeletePost = (id) => {
    db.collection('blogs').doc(id).delete()
    
}


  render(){
    let body
    if (this.state.blogs){
      body = (
        <div>
        <label>By Author</label>
        <input type="text" name='author' onChange = {this.handleOnChange} />
        {this.state.blogs.map(blog => {
          if (blog.author.includes(this.state.authorFilter)){
            return <BlogSummary clickedBlog = {() => this.handleClickBlog(blog.id)} deletePost = {() => this.handleDeletePost(blog.id)} key={blog.id} title = {blog.title} summary = {blog.summary} author = {blog.author} />
          }
          else{
            return null
          }
        })}
      </div>
      )
    }
    return (
      body
    );
  }
  }
  



export default (BlogListPage)
