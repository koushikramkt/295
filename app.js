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

const bodyParser = require('body-parser');
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

//  Create new request to cloudant

/*  var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})*/

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public/gentelella-master/production/'));

//  koushik tuesday INIT
app.use('/ajax',ajax);
app.use('/commentserver',commentserver);

// get the app environment from Cloud Foundry
const appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
//  app.listen(appEnv.port, '0.0.0.0', function() {
app.listen(7000, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log('server starting on 7000' + appEnv.url);
});
