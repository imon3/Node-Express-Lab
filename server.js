const express = require('express');

const postRouter = require('./data/post-router');

const server = express();

server.get('/', (req, res) => {
    res.send('Server Running');
});

server.use(express.json());
server.use(postRouter);




// PORT LISTENER
server.listen(5555, () => {
    console.log('Server Running on http://localhost:5555')
});

module.exports = server;