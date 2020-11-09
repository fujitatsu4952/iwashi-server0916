const mysql = require('mysql');
// import mysql from 'mysql'
// データベースの接続
const connection = mysql.createConnection({
  host: "18.180.113.27",
  port: "8080",
  user: 'tatsuya',
  password: 'zsEdcfTgb!1',
  database: 'iwashi0920',
});

export default connection;
