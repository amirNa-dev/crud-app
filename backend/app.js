const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const { mongooseClient } = require('./mongoose.js');

let studentsController = require('./controllers/studentsController.js');

var app = express();

app.use(bodyParser.json());


app.use(cors({ origin: 'http://localhost:4200' }));

app.use(express.static(path.join(__dirname, '../frontend/public')));

app.listen(3000, () => console.log('Server started at port : 3000'));

const getRoot= (request, response) => {
   response.sendFile(path.resolve('../frontend/public'));
}


app.use(express.static('../frontend/public'));

app.get('/', getRoot);

app.use('/students', studentsController);

app.use(function (err, req, res, next) {
    res.status(500).send({
        status : false,
        error : err.message
    })
})
