var express = require('express');
var app = express();

//making static assets
app.use(express.static("public"));

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'asdfasdf',
  database : 'pokefriends_db'
});
 
connection.connect();
 
app.listen(3000, function(){
	console.log('listening on 3000');
});


