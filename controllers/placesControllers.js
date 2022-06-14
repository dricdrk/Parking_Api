const places = require ('../Ressources/ressources')
module.exports = {
    // reservedPlace all methods 
// create ressource function 
    
    //create places 
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
    //update place
    createPlace:function(data, res){

        places.createRessource(data,res,"Update places( state ) VALUES ? where id= 1");
    },

    // delete place
    deletePlace:function(place,res){
        places.deleteRessource(place,res,"DELETE FROM places WHERE id = ?");
    }
}
