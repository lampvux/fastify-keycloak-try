
const knex = require("knex")({
    client: "pg",
    connection: {
      host: "database",
      user: "testuser",
      password: "testpassword",
      database: "userdatabase"
    },
    pool: { min: 0, max: 10 }
});

module.exports = {
   knex
  };
