const express = require('express');
const cors = require('cors');

const postRouter = require('./data/post-router');

const server = express();

server.use(express.json());
server.use(cors());
server.use('/', postRouter);

module.exports = server;