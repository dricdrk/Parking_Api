const config = require ('./db_config')
con = config.db_conn();
// utility
  //checkif user sendmail
function checkIfEmailInString(text) { 
    var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return re.test(text);
}
module.exports = {
   createRessource:function(data,res,sql_request){
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
    },
    deleteRessource:function(data,res,sql_request){
        if (data.id) {
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
                    var get_data = sql_request;
                    con.query(get_data, data.id, function (err, result) {
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
        if(!data.id) {
            res.statusCode =
            data = {
                'message': "this ressource don't exit try with available ressource ",
                'status':   res.statusCode ,
                'error' :    err            
            }
            res.send(data);
            throw err;
             
        }
    },
    getAllRessource:function(req,res,sql_request){
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
                var get_data = sql_request;
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
    getOneRessource:function(data,res,sql_request){
        if (data.id) {
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
                    var get_data = sql_request;
                    con.query(get_data, data.id, function (err, result) {
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
    updateRessource:function(data,res,sql_request){}
}