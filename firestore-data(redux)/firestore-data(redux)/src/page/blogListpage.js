import React from 'react';
import BlogSummary from '../blogsummary/blogsummary.js'
import {db} from '../config/firebaseconfig.js';
import {connect} from 'react-redux'
import {getFromFirestore} from '../actions/blogactions.js'


class BlogListPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {authorFilter: ''};
    this.props.getFromFirestore()

  }
  

  handleClickBlog = (id) => {
    console.log(this.props)
    this.props.history.push('/blogs/' + id)
  }

  handleOnChange = (e) =>{
    console.log(e.target.value)
    this.setState({
      ...this.state,
      authorFilter: e.target.value
    })
  }

  handleDeletePost = (id) => {
    db.collection('blogs').doc(id).delete()
    
}

  render(){
    console.log(this.props.blogs)
    let body
    if (this.props.blogs){
      body = (
        <div>
        <label>By Author</label>
        <input type="text" name='author' onChange = {this.handleOnChange} />
        {this.props.blogs.map(blog => {
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
    else{
      body= null
    }
    return (
      body
    );
  }
  }

  const mapStateToProps = state => {
    return {
      blogs: state.blogs
    }

  }
  

  const mapDispatchToProps = dispatch => {
    return{
        getFromFirestore: () => dispatch(getFromFirestore())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BlogListPage)
