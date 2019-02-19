const server = require('./server');

// PORT LISTENER
server.listen(8000, () => {
    console.log('Server Running on http://localhost:8000')
});