var mysql = require('mysql2');

var con = mysql.createConnection({
  database: 'parking',
  host: "localhost",
  user: "root",
  password: "SessiHans99#"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
// function create_user(user){

// }