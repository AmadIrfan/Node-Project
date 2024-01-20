const sql = require("mssql");

let config = {
	server: "localhost",
	database: "LMS",
	port: 1433,
	user: "ai",
	password: "123@amad",
	options: {
		trustedConnection: true, // Use Windows Authentication
		encrypt: true,
		trustServerCertificate: true,
	},
};

async function connect() {
	try {
		await sql.connect(config);
		console.log("Connected to the database");
	} catch (error) {
		console.log(error.message);
		console.log("Not connected to the database");
	}
}

connect();
