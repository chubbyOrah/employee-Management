import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeems"
});

con.connect(function(err) {
    if (err) {
        console.log("Connection error:", err);
    } else {
        console.log("Connected to the MySQL database");
    }
});



export default con; // Default export

