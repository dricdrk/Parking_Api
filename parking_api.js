const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;


// Where we will keep books
let parking = [];
let user = {};
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/parking', (req, res) => {
    // We will be coding here
    console.log(req)
    res.send(req.body)
});
app.post('/user', (req, res) => {
    user = {
        name:req.body.name,
        surname:req.body.surname,
        mail:req.body.mail,
        phone:req.body.phone
    }
    
    console.log(user)
    res.send(user)
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));