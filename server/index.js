const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// server.use('/api/cars', require('../cars/carsRouter'));

server.get('/', (req, res) => {
    res.send('Welcome to the Cars API');
})

module.exports = server;