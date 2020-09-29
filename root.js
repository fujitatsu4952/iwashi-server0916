const connection = require('./database.js');

const root = {
  members: (dream, real) => {
    return new Promise((resolve) => {
      console.log(dream);
      //   console.log(real)
      let conditions = 'SELECT * FROM `ReservationObject`';
      const filter = Object.keys(dream);
      // 検索条件がある場合、SQL文に条件を追加
      if (filter.length !== 0) {
        conditions +=
          ' WHERE `' + filter[0] + '` = "' + dream[filter[0]] + '"';
      }
      connection.query(conditions, (err, results, fields) => {
        console.log(JSON.parse(JSON.stringify(results)));
        resolve(JSON.parse(JSON.stringify(results)));
      });
    });
  },
  allMembers: () => {
    return new Promise((resolve) => {
      let conditions = 'SELECT * FROM `ReservationObject`';
      connection.query(conditions, (err, results, fields) => {
        console.log(JSON.parse(JSON.stringify(results)));
        resolve(JSON.parse(JSON.stringify(results)));
      });
    });
  },
};

module.exports = {
  root,
  connection
};
