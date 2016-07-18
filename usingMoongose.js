 //var http = require ('http');    
///Lets load the mongoose module in our program
var mongoose = require('mongoose');

//Lets connect to our database using the DB server URL.
//lets require/import the mongodb native drivers.
//var mongodb = require('mongodb');


//Lets connect to our database using the DB server URL.
mongoose.connect('mongodb://localhost:27017/company');

/**
 * Lets define our Model for User entity. This model represents a collection in the database.
 * We define the possible schema of User document and data types of each field.
 * */
var User = mongoose.model('User', {NAME: String, Emp_ID: String, Project:String});

/**
 * Lets Use our Models
 * */

//Lets create a new user
var user1 = new User({NAME: 'swathi', Emp_ID: "22333", Project: 'unallocated'});

//Some modifications in user object
user1.name = user1.NAME.toUpperCase();

//Lets try to print and see it. You will see _id is assigned.
console.log(user1);

//Lets save it
user1.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});