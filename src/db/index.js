// db.js
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "project_management",
});

module.exports = db;
