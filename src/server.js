require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();

// GET, POST, PUT, DELETE
mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
server.use(cors(corsOptions));
server.use(express.json());
server.use(routes);



server.listen(process.env.PORT || 3000);