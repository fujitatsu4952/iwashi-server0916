// const express = require('express');
import express from "express";
const app = express();
// const bodyParser = require('body-parser');
import bodyParser from "body-parser"

// const cors = require('cors');
import cors from 'cors'

app.use(bodyParser.json());
var corsOptions = {
    exposedHeaders: 'x-auth',
};
app.use(cors(corsOptions));

export default app ;
