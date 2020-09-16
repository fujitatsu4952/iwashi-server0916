const express = require('express');
const app = express();
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'iwashi0916-database.c0mbtloblzo0.ap-northeast-1.rds.amazonaws.com',
    user: 'tatsuya',
    password: 'zsEdcfTgb!1',
    database: 'iwashi0916',
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Connected');
});

app.get('/', function (req, res) {
    res.send('Hello Worldssssss!');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
