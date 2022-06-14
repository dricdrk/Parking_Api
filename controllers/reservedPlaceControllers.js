const { start } = require('repl');
const users = require ('../Ressources/ressources')
module.exports = {
    // reservedPlace all methods 
// create ressource function 
    
    //create reservation
   createUser:function(data, res){
    con.connect(function(err) {
        let state = data;
        if (err) throw err;
        amount = 1000;
        code = data.id_place+data.end+data.start;
        data = [data.id_place,data.start,data.end,data.id_user,amount ,code ];
        var add_reservation = "INSERT INTO users( id_place , start_date , end_date ,id_user ,amount ,code ) VALUES ?";

        con.query(add_reservation,[data], function (err, result) {
            if (err) {
                res.statusCode =400;
                let data = {
                    "message":"Error ",
                    "error":err,
                    "status":res.statusCode
                }
                res.send(data);
            }
            let data = {
                "message":"Ressource has been create successfully ",
                "status":201
            }
            res.statusCode =201;
            return res.send(data);
        });
    });
},
    // get one reservation
    getUser:function (id,res){
        users.getOneRessource(id,res,'SELECT * FROM reserved WHERE id = ?');
    },

    //get all reservation
    getAllUser:function(req,res){
       users.getAllRessource(req,res, 'SELECT * FROM reserved ');
    },
    
    // delete reservation
    deleteUser:function(place,res){
        users.deleteRessource(place,res,"DELETE FROM reserved WHERE id = ?");
    },
    updateUser:function(data, res){
        users.updateRessource(data,res,users);
        },
}
