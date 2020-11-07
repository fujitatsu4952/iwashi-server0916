// const mysql = require('mysql');
import {createConnection} from 'mysql'
// データベースの接続
const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'iwashi0920',
});

export {connection};
