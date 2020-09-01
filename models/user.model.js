const db = require('../db/db').Get();

const getUserById = (id) => {
  const user = db
    .select('*')
    .from('users')
    .where({ id: id })
    .then((data) => {
      if (data.length) {
        return data[0];
      } else {
        return null;
      }
    })
    .catch((err) => {
      throw new Error(`Can't get user by ID: ${err}`);
    });
  return user;
};

const getUserByEmail = (email) => {
  const user = db
    .select('*')
    .from('users')
    .where({ email: email })
    .then((data) => {
      if (data.length) {
        return data[0];
      } else {
        return null;
      }
    })
    .catch((err) => {
      throw new Error(`Can't get user by email: ${err}`);
    });
  return user;
};

const registerUser = async (email, name, hash) => {
  try {
    const result = await db.transaction(async (trx) => {
      await trx
        .insert({ hash: hash, email: email })
        .into('login')
        .transacting(trx);
      // save user info
      const user = await db('users')
        .insert({
          email: email,
          name: name,
          joined: new Date(),
        })
        .returning('*')
        .transacting(trx);
      if (user.length) {
        return user[0];
      }
    });
    return result;
  } catch (err) {
    return null;
  }
};

const getUserLogin = (email) => {
  return db
    .select('email', 'hash')
    .from('login')
    .where({ email: email })
    .then((user) => {
      if (user.length) {
        return user[0];
      } else {
        return null;
      }
    })
    .catch((err) => {
      throw new Error(`Can't get user login: ${err}`);
    });
};

const updateEntries = (id) => {
  return db('users')
    .where({ id: id })
    .increment('entries', 1)
    .returning('entries')
    .then((data) => {
      if (data.length) {
        return data[0];
      } else {
        return null;
      }
    })
    .catch((err) => {
      throw new Error(`Can't update entries by ID: ${err}`);
    });
};

module.exports = {
  getUserById,
  registerUser,
  getUserById,
  getUserByEmail,
  getUserLogin,
  updateEntries,
};
