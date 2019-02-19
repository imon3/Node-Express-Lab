const express = require('express');

const postRouter = require('./data/post-router');

const server = express();

server.use(express.json());
server.use('/', postRouter);

module.exports = server;