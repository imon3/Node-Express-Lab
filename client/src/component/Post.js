import React from 'react';
import './Post.css'

const Post = (props) => {
    console.log(props)
    return (
        <div className='post'>
            <h1 className='contents'>{props.post.contents}</h1>
            <h3 className='title'>{props.post.title}</h3>

        </div>
    )
}

export default Post;