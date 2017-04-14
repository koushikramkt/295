var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : "rds-mysql-sjcdisbig.coixlfrjdyvl.us-west-1.rds.amazonaws.com",
  user     : "sjcdisbigmaster",
  password : "pass1234",
  port     : "3306"
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();