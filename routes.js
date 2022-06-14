const usercontroller = require('./controllers/usersControllers');
const placecontroller = require('./controllers/placesControllers');
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

// Where we will keep books
let user = {};
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//function to get user data 
user_data= function(req){
   return user = {
        name:req.body.name,
        surname:req.body.surname,
        mail:req.body.mail,
        phone:req.body.phone
    } 
}
// places 

// create place 
app.post('/places', (req, res) => {
    placecontroller.createPlace(req.body,res);
});

// get all place
app.get('/places', (req, res) => {
    placecontroller.getAllPlace(req,res);
});
// get one place 
app.get('/places/:id', (req, res) => {
    placecontroller.getPlace(req.params,res);
});

// update all place  
app.put('/places', (req, res) => {
    placecontroller.getAllPlace(req.body.place_number,res);
});

//delete place 
app.delete('/places/:id', (req, res) => {
    placecontroller.deletePlace(req.params,res);
});

/* Users */

// get all user
app.get('/users', (req, res) => {
    usercontroller.getAllUser(req,res);
});
// get one user 
app.get('/users/:id', (req, res) => {
    usercontroller.getUser(req.params,res);
});

// update all user  
app.put('/users', (req, res) => {
    usercontroller.getAllUser(req.body.user_number,res);
});

//delete user 
app.delete('/users/:id', (req, res) => {
    usercontroller.deleteUser(req.params,res);
});
/* booking */

// get all booking
app.get('/booking', (req, res) => {
    bookingcontroller.getAllbooking(req,res);
});
//get One booking
app.get('/booking', (req, res) => {
    bookingcontroller.getAllbooking(req,res);
});
//update booking
app.put('/booking', (req, res) => {
    bookingcontroller.getAllbooking(req.body.booking_number,res);
});
//delete booking 
app.delete('/booking/:id', (req, res) => {
    bookingcontroller.deletebooking(req.params,res);
});



app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

