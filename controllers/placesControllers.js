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
   function createRessource(data,res,sql_request){
    con.connect(function(err) {
        let state = data.state;
        if (err) throw err;

        var add_reservation = sql_request;
        let newplace=[[state]];

        con.query(add_reservation,[newplace], function (err, result) {
            if (err) {
                res.statusCode =400;
                let data = {
                    "message":"Error ",
                    "error":err,
                    "status":res.statusCode
                }
                res.send(data);
            }
            console.log("place create !");
            let data = {
                "message":"place has been create successfully ",
                "status":201
            }
            res.statusCode =201;
            return res.send(data);
        });
    });
}
module.exports = {
    // reservedPlace all methods 
// create ressource function 
    
    //create reservation
   createPlace:function(data, res){
    createRessource(data,res,"INSERT INTO places( state ) VALUES ?");
    },
    // get one place 
    getPlace:function (id,res){
            if (id.id) {
                con.connect(function(err) {
                    if (err) {
                        res.statusCode=502
                        data = {
                            'message': "error to connect database ",
                            'status':   res.statusCode ,
                            'error' :    err            
                        }
                        res.send(data);
                        throw err
                    };
                        var get_data = 'SELECT * FROM places WHERE id = ?';
                        con.query(get_data, id.id, function (err, result) {
                            if (err){
                                res.statusCode=502
                                data = {
                                    'message': "error to execute your request ",
                                    'status':   res.statusCode ,
                                    'error' :    err            
                                }
                                 throw err
                                 res.send(data);
                                };
                            res.send(result)
                          });
                    });
            }
           
    },
    //get all place
    getAllPlace:function(req,res){
        con.connect(function(err) {
            if (err) {
                res.statusCode=502
                        data = {
                            'message': "error to connect database ",
                            'status':   res.statusCode ,
                            'error' :    err            
                        }
                        res.send(data);
                        throw err
            };
                var get_data = 'SELECT * FROM places ';
                con.query(get_data, function (err, result) {
                    if (err) {
                        res.statusCode=502
                        data = {
                            'message': "error to execute your request  ",
                            'status':   res.statusCode ,
                            'error' :    err            
                        }
                        res.send(data);
                        throw err
                    };
                    res.send(result)
                  });
        });

    },
    // del
    deletePlace:function(place,res){
        console.log(place);
        if (place.id) {
            con.connect(function(err) {
                if (err) {
                    res.statusCode=502
                    data = {
                        'message': "error to connect database ",
                        'status':   res.statusCode ,
                        'error' :    err            
                    }
                    res.send(data);
                    throw err
                };
                    var delete_data = 'DELETE FROM places WHERE id = ?';
                    con.query(delete_data, place.id, function (err, result) {
                        if (err) {
                            res.statusCode=502
                            data = {
                                'message': "error to execute request ",
                                'status':   res.statusCode ,
                                'error' :    err            
                            }
                            res.send(data);
                            throw err
                        };
                            
                        res.statusCode=202
                        data = {
                            result,
                            "message":"you delete place successfully",
                            "status code ":res.statusCode
                        }
                        res.send(data)
                      });
                });
        }
       
    }
}
