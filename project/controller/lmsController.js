const sql = require("mssql");
const { v4: uuidv4 } = require("uuid");
const uid = uuidv4();
async function getController(req, res) {
	try {
		const result = await sql.query("SELECT * FROM course");
		res.status(200).json(result.recordset);
	} catch (error) {
		res.json({ message: error.message });
		// console.error("Error querying the database:", error.message);
	}
}
async function postController(req, res) {
	try {
		const uid = uuidv4();
		const { name, description, limitStudent, courseCode } = req.body;
		const jsDate = new Date();

		const year = jsDate.getFullYear();
		const month = (jsDate.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based, so add 1 and pad with zero if necessary
		const day = jsDate.getDate().toString().padStart(2, "0");
		const hours = jsDate.getHours().toString().padStart(2, "0");
		const minutes = jsDate.getMinutes().toString().padStart(2, "0");
		const seconds = jsDate.getSeconds().toString().padStart(2, "0");
		const createDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
		const data = {
			name: name,
			description: description,
			createDate: createDate,
			updateDate: createDate,
			courseCode: courseCode,
			limitStudent: limitStudent,
		};

		const result = await sql.query(
			`INSERT INTO course (id, name, description, createDate, updateDate,courseCode ,limitStudent) VALUES ('${uid}', '${data.name}', '${data.description}', '${data.createDate}', '${data.updateDate}','${data.courseCode}', ${data.limitStudent})`
		);

		res.send({ message: "posted successfully", body: data });
	} catch (error) {
		res.send({ message: error });
	}
}

module.exports = { getController, postController };
