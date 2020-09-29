// データ型を指定
const {
  buildSchema
} = require('graphql');
// フィールド名: 返却データ型
const schemas = buildSchema(`
   type Member {
     reservationID: String
     guestName: String
   }

   type Query {
    members(reservationID: String): [Member]
    allMembers: [Member]
  }
 `);
module.exports = schemas;
