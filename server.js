var express = require('express');
var app = express();
// var methodOverride = require('method-override')
// var bodyParser = require('body-parser')

// app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

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

app.get('/api/friends', function(req, res){
	connection.query('SELECT * FROM friends', function (error, results, fields) {
	  if (error) res.send(error)
	  else res.json(results); 
	});
});

app.post('/api/friends', function(req, res){
	console.log(req.body.quest);

	if (req.body.quest.length > 1){
		for (var i = 0; i < req.body.quest.length; i ++) {
			connection.query('INSERT INTO scores (answer) VALUES (?)', [req.body.quest[i]], function (error, results, fields) {
		  if (error) res.send(error)
		  else res.json(results);
			});		
		}

	} else {
		res.send('invalid name')
	}
});

app.listen(3000, function(){
	console.log('listening on 3000');
});


