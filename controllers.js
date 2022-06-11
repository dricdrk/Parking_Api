var mysql = require('mysql2');

function createUser(user){
    let name = user.name;
    let surname = user.surname;
    let mail = user.mail;
    let phone = user.phone;

    con.connect(function(err) {
        if (err) throw err;
        var add_user = "INSERT INTO customers (name, surname, mail, phone) VALUES ("+name+", "+surname+", "+mail+", "+phone+")";
        con.query(add_user, function (err, result) {
            if (err) throw err;
            console.log("user create !");
          });
      });
    
}
function get_allUser(user){
    con.connect(function(err) {
            if (err) throw err;
        con.query("SELECT * FROM users WHERE id = "+user.id+"'", function (err, result) {
            if (err) throw err;
              console.log(result);
              return result
            });
          });

}
