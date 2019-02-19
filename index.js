const server = require('./server');

// PORT LISTENER
server.listen(6000, () => {
    console.log('Server Running on http://localhost:6000')
});