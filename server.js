const express = require('express');

const postRouter = require('./data/post-router');

const server = express();

server.use(express.json());
server.use(postRouter);




// PORT LISTENER
server.listen(6000, () => {
    console.log('Server Running on http://localhost:6000')
});

module.exports = server;