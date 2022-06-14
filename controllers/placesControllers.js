const places = require ('./Ressources/ressources')
module.exports = {
    // reservedPlace all methods 
// create ressource function 
    
    //create reservation
   createPlace:function(data, res){
    places.createRessource(data,res,"INSERT INTO places( state ) VALUES ?");
    },
    // get one place 
    getPlace:function (id,res){
        places.getOneRessource(id,res,'SELECT * FROM places WHERE id = ?');
    },

    //get all place
    getAllPlace:function(req,res){
       places.getAllRessource(req,res, 'SELECT * FROM places ');
    },

    // delete place
    deletePlace:function(place,res){
        places.deleteRessource(place,res,"DELETE FROM places WHERE id = ?");
    }
}
