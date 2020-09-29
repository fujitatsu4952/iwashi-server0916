const mysql = require('mysql');
// データベースの接続
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'iwashi0920',
});

module.exports = connection;
