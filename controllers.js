var mysql = require('mysql2');
var con = mysql.createConnection({
    database: 'mydb',
    host: "localhost",
    user: "root",
    password: "SessiHans99#"
  });
  //checkif user sendmail
  function checkIfEmailInString(text) { 
    var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return re.test(text);
}
module.exports = {
    // Users all methods 
    //create user
   createUser:function(user, res){
        let name = user.name;
        let surname = user.surname;
        let mail = user.mail;
        let phone = user.phone;

        con.connect(function(err) {
            if (err) throw err;
            // var add_user = "INSERT INTO users (name, surname, mail, phone) VALUES ("+name+", "+surname+", "+mail+", "+phone+")";
            var add_user = "INSERT INTO users( name , surname , mail ,phone ) VALUES ?";
            user=[[name,surname,mail,phone]];
            if (checkIfEmailInString(mail)== false) {
                let data = {
                    "message":"give right mail",
                    "status":500
                }
                return res.send(data);

            }

            con.query(add_user,[user], function (err, result) {
                if (err) throw err;
                console.log("user create !");
                let data = {
                    "message":"user has been create successfully ",
                    "status":200
                }
                console.log(res);
                res.statusCode =201;
                return res.send(data);
            });
        });
        
    },
    //get User 
    getUser:function(id,res){
        con.connect(function(err) {
            if (err) throw err;
            if (id.id) {
                console.log(id);
                var get_data = 'SELECT * FROM users WHERE id = ?';
                con.query(get_data, [id.id], function (err, result) {
                    if (err) throw err;
                    res.send(result)
                  });
            }
        });
    }

}
