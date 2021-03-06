require("dotenv").config();
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_KEY,
    database: process.env.MYSQL_DBNAME,
    host: process.env.MYSQL_HOST,
    port: 3306,
    dialect: "mysql",
    timezone: "America/New_York"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "America/New_York"
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
    timezone: "America/New_York"
  }
};
