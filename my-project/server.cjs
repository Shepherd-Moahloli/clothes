const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 5174;

app.use(express.static("public"));

const db = mysql.createConnection({
  host: "127.0.0.1", // replace with your host name
  user: "root", // replace with your MySQL username
  password: "Abutibulaboot22!", // replace with your MySQL password
  database: "hoodrevenge", // replace with your database name
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the MySQL database.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
