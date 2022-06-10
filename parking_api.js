const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;


// Where we will keep books
let parking = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/parking', (req, res) => {
    // We will be coding here
    console.log(req)
    res.send(req.body)
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));