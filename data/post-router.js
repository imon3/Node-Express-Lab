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
    const post = await Dbase.insert(req.body);
    console.log(post)
    try {
        if (!post.title || !post.contents) {
            res.status(400).json({
                errorMessage: 'Please provide title and contents for the post.'
            }).end()
        } else {
            res.status(201).json(post)
        }
    } catch (error) {
        res.status(500).json({
            error: 'There was an error while saving the post to the database.'
        })
    }
})

module.exports = router;