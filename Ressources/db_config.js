module.exports ={ 
    db_conn:function(){
        require('dotenv').config();
        var mysql = require('mysql2');
        var con = mysql.createConnection({
        database: process.env.DB,
        host:process.env.HOST,
        user: process.env.DBUSER,
        password:process.env.PASSWORD
        });
        return con;
    },
    db_init:function(){
        require('dotenv').config();
        var mysql = require('mysql2');
        var con = mysql.createConnection({
        host:process.env.HOST,
        user: process.env.DBUSER,
        password:process.env.PASSWORD
        });
        return con;
    }
}
