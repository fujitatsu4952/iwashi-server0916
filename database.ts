const mysql = require('mysql');
// import mysql from 'mysql'
// データベースの接続
const connection = mysql.createConnection({
  host: "iwashi-1106-db-real.c0mbtloblzo0.ap-northeast-1.rds.amazonaws.com",
  port: "3306",
  user: 'tatsuya',
  password: 'zsEdcfTgb!1',
  database: 'iwashi0920',
});

export default connection;
