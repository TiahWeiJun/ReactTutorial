import React from 'react'

const BlogSummary = (props) => {
    return (
        <div style={{border: '2px solid red', margin: "10px"}}>
            <p>{props.title}</p>
            <p>{props.summary}</p>
            <p>{props.author}</p>
            <button onClick = {props.deletePost}>Delete</button>
            <button onClick = {props.clickedBlog}>View Blog</button>
        </div>
    )
}

export default BlogSummary