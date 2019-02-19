const express = require('express');

const Dbase = require('./db');

const router = express.Router();


// GET CRUD REQUEST
router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/api/posts', async (req, res) => {
    try {
        const posts = await Dbase.find(req.query);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            message: 'The post information could not be retrieved.'
        });
    }
});

router.get('/api/posts/:id', async (req, res) => {
    try {
        const post = await Dbase.findById(req.params.id);
        if (!post) {
            res.status(404).json({
                message: 'The post with the specified ID does not exist.'
            })
        } else {
            res.status(200).json(post)
        }
    } catch (error) {
        res.status(500).json({
            error: 'The post information could not be retrieved.'
        })
    }
})

// CREATE CRUD REQUEST
router.post('/api/posts', async (req, res) => {

    console.log(req.body)
    try {
        const post = await Dbase.insert(req.body);
        if (req.body.title && req.body.contents) {
            res.status(201).json(post)
        } else {
            res.status(400).json({
                errorMessage: 'Please provide title and contents for the post.'
            }).end()
        }
    } catch (error) {
        res.status(500).json({
            error: 'There was an error while saving the post to the database.'
        })
    }
})

// DELETE CRUD REQUEST
router.delete('/api/posts/:id', async (req, res) => {

    try {
        const post = await Dbase.remove(req.params.id);
        if (!post) {
            res.status(404).json({
                message: 'The post with the specified ID does not exist.'
            }).end()
        } else {
            res.status(200).json({
                message: 'The post was deleted'
            })
        }
    } catch (error) {
        res.status(500).json({
            error: 'The post could not be removed.'
        })
    }
})

// UPDATE REQUEST
router.put('/api/posts/:id', async (req, res) => {
    const postId = req.params.id;
    const post = req.body;
    const updatePost = await Dbase.update(postId, post)

    try {
        if (!postId) {
            res.status(404).json({
                message: 'The post with the specified ID does not exist.'
            }).end()
        } else if (!post.id || !post.title) {
            res.status(400).json({
                errorMessage: 'Please provide title and contents for the post.'
            }).end()
        } else {
            res.status(200).json(updatePost)
        }
    } catch (error) {
        res.status(500).json({
            error: 'The post information could not be modified.'
        })
    }
})

module.exports = router;