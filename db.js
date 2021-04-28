const Pool = require("pg").Pool;

const pool = new Pool({
	user : "alexdorcival",
	password : "Alexandre999",
	database : "postgres",
	host : "localhost",
	port : 5432 
});

module.exports = pool;
