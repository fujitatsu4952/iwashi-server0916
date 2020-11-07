const mysql = require('mysql');
// import mysql from 'mysql'
// データベースの接続
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'iwashi0920',
});

export default connection;
