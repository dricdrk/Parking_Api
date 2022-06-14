const users = require ('../Ressources/ressources')
module.exports = {
    // reservedPlace all methods 
// create ressource function 
    
    //create reservation
   createUser:function(data, res){
    users.createRessource(data,res,"INSERT INTO users( name , surname , mail ,phone ) VALUES ?");
    },
    // get one User 
    getUser:function (id,res){
        users.getOneRessource(id,res,'SELECT * FROM users WHERE id = ?');
    },

    //get all User
    getAllUser:function(req,res){
       users.getAllRessource(req,res, 'SELECT * FROM users ');
    },
    
    // delete User
    deleteUser:function(place,res){
        users.deleteRessource(place,res,"DELETE FROM users WHERE id = ?");
    },
    updateUser:function(data, res){
        users.updateRessource(data,res,users);
        },
}
