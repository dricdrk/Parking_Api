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
    }
}