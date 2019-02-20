import React from 'react';
import axios from 'axios';
import Post from './Post';

import './Post.css';

class Posts extends React.Component {
    constructor() {
        super()

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/posts')
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.posts)
        return (
            <div className='posts'>
                {this.state.posts.map((post, index) => {
                    return (
                        <Post post={post} key={index} />
                    )
                })}
            </div>
        )
    }
}

export default Posts;