require('dotenv').config();

const server = require('./server');

const port = process.env.PORT || 5000;

// PORT LISTENER
server.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
});