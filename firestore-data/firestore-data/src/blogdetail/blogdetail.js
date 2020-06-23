import React from 'react'

const BlogDetail = (props) => {
    return(
        <div>
            <p>{props.id}</p>
            <p>{props.title}</p>
            <p>{props.content}</p>
            <p>{props.author}</p>
            
        </div>
    )
}
export default BlogDetail