/* eslint-env node */

// This application uses express as its web server
// for more info, see: http://expressjs.com
const express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
const cfenv = require('cfenv');

// create a new express server
const app = express();

//  koushik tuesday INIT
const ajax = require('./routes/ajax');
const commentserver = require('./routes/commentserver');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.use(bodyParser.json({
   limit: '10mb',
   strict: false
 }));
 app.use(bodyParser.json({
   type: 'application/vnd.api+json',
   limit: '10mb',
   strict: false
 }));

 var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://koushik41:koushikKT17!@ds161210.mlab.com:61210/logins';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  var collection = db.collection('login');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null); //Checking if error is equal to null. If not it will throw an exception
      console.log("Found the following records");
      console.dir(docs);
    });

  db.close();
});
 
 var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : "rds-mysql-sjcdisbig4.coixlfrjdyvl.us-west-1.rds.amazonaws.com",
  user     : "sjcdisbigmaster",
  password : "pass1234",
  port     : "3307"
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

 //connection.end();

//  Create new request to cloudant

/*  var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})*/

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public/gentelella-master/production/'));

/*
app.use('/ajax',ajax);
app.use('/commentserver',commentserver);
*/

// get the app environment from Cloud Foundry
const appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
//  app.listen(appEnv.port, '0.0.0.0', function() {
app.listen(4000, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log('server starting on 4000 ' /*appEnv.url*/);
});
app.get('/latlong',function(req,res){
    //console.log("received request");
    //console.log(req.query.location);
    var lat="lat13";
    var long = "long 12";
    //var query = "select latitude, longitude from BigDataDisMmt.CityLatLong where cityname='"+req.query.location+"'";
    var query = "select * from BigDataDisMmt.CityLatLong"
    //console.log(query);
    
 
 connection.query(query, function(err, rows) {
   if (!err){
     console.log("rows count:"+rows.length);  
     res.json(rows);
       
   }
   else
     console.log('Error while performing Query.');
     
 });

    //res.json({lat:lat,long:long});
    //req.send("request reply");
});
app.get('/pieChart',function(req,res){
	
	var query="select * from BigDataDisMmt.City_Language where City='San Jose';";
	var value;
	var sum;
	connection.query(query, function(err, rows) {
		if(!err){
			console.log("rows count is: "+rows.length)
			
			res.json(rows);
		}
		else{
			console.log("Error while performing the query !");
		}
		
	});
	
});

