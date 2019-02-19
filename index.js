const server = require('./server');

// PORT LISTENER
server.listen(5555, () => {
    console.log('Server Running on http://localhost:5555')
});