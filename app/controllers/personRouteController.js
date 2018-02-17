
var express = require('express')
    , router = express.Router()

//include preson model
var Person = require('../models/person');

// on routes that end in /persons
// ----------------------------------------------------
router.route('/persons')
    // more routes for our API will happen here
    .post(function (req, res) {

        console.log('request body is =>');
        console.log(req.body);
        var person = new Person();      // create a new instance of the User model
        person.name = req.body.name;
        person.email = req.body.email;
        person.age = req.body.age;
        console.log(person);


        person.save(function (err) {
            if (err) {
                res.send(err);
            }
            Person.find({}, function (err, pers) {
                res.send(pers);
            });
        });

    })

    .get(function (req, res) {

        Person.find({}, function (err, pers) {
            res.send(pers);
        });

    });

// on routes that end in /persons/:personname
// ----------------------------------------------------
router.route('/persons/findByName/:personname')
    // get the user with that name (accessed at GET http://localhost:8080/api/persons/:personname)
    .get(function (req, res) {
        console.log(req.params.personname);
        Person.find({ name: new RegExp(req.params.personname, "i") }, function (err, person) {
            if (err)
                res.send(err);
            res.json(person);
        });
    });

module.exports = router