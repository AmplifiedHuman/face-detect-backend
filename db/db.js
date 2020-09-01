const knex = require('knex');

const DBConnection = () => {
  let db = null;
  let instance = 0;

  function DBConnect() {
    try {
      const db = knex({
        client: 'pg',
        connection: {
          host: process.env.HOST,
          user: process.env.USER,
          password: process.env.PASSWORD,
          database: process.env.DB,
        },
      });
      return db;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  function Get() {
    try {
      instance++;
      console.log(`DB connection called ${instance} times`);
      if (db != null) {
        console.log(`DB connection is already alive`);
        return db;
      } else {
        console.log(`Getting new DB connection`);
        db = DBConnect();
        return db;
      }
    } catch (e) {
      return e;
    }
  }

  return {
    Get: Get,
  };
};

module.exports = DBConnection();
