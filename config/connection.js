// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
// Dependencies
var Sequelize = require("sequelize");
// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("yj0c1ekp5mdz7rru", "awxndxezk8crbqik", "oq6g369xnava4u4n", {
  host: "h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
// Exports the connection for other files to use
module.exports = sequelize;