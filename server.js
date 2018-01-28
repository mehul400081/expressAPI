// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



var port = process.env.PORT || 8080;        // set our port

// connect to mongodb
var mongoose  =  require('mongoose');
mongoose.connect('mongodb://localhost:27017/person'); // connect to our database


///include route controllers
app.use(require('./app/controllers'))


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);