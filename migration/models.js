const config = require ('./db_config')
con = config.db_init();

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err, result) {
      if (err) throw err;
      var usersTable = "CREATE TABLE users (`id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(255) , `surname` VARCHAR(255), `mail` VARCHAR(255), `phone` VARCHAR(255), PRIMARY KEY (`id`))";
      var Parkingplacesreserved  = "CREATE TABLE reserved (`id` INT NOT NULL AUTO_INCREMENT , `id_place` DATE NOT NULL , `start_date` DATE NOT NULL , `end_date` INT NOT NULL , `id_user` INT NOT NULL , `amount` FLOAT NOT NULL , PRIMARY KEY (`id`))";
      var Parkingplaces = "CREATE TABLE places (`id` INT NOT NULL AUTO_INCREMENT , `state` INT , PRIMARY KEY (`id`))";
      var con = mysql.createConnection({
        database: 'mydb',
        host: "localhost",
        user: "root",
        password: "SessiHans99#"
      });
      con.query(usersTable, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
    con.query(Parkingplaces, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
    con.query(Parkingplacesreserved, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
      console.log("Database created");
    });
  });