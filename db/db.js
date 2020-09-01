const knex = require('knex');

const localDB = {
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DB,
  password: process.env.PASSWORD,
};

const DBConnection = () => {
  let db = null;
  let instance = 0;

  function DBConnect() {
    try {
      // use local server if not in prod
      if (!process.env.DATABASE_URL) {
        const db = knex({ client: 'pg', connection: localDB });
        return db;
      } else {
        const db = knex({
          client: 'pg',
          connection: {
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false },
          },
        });
      }
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
