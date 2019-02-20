import React from 'react';
import './Post.css'

const Post = (props) => {
    console.log(props)
    return (
        <div className='post'>
            <h1 className='title'>{props.post.title}</h1>
            <h3 className='contents'>{props.post.contents}</h3>
        </div>
    )
}

export default Post;