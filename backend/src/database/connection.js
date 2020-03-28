const knex = require("knex");
const config = require("../../knexfile");

const env = process.env.NODE_ENV === "test" ? "test" : "development";

const connection = knex(config[env]);

module.exports = connection;
