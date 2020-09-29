const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
var corsOptions = {
    exposedHeaders: 'x-auth',
};
app.use(cors(corsOptions));

export { app };
