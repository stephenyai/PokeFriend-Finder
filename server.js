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
	console.log(req.body);

	connection.query('INSERT INTO friends SET ?', {'name': req.body['full-name']}, function (error, results, fields) {
		if (error) throw error;

		var friendID = results.insertId;
		console.log(results.insertId);

		var friendsArray = [];
		for (var i = 0; i < req.body.quest.length; i ++) {
			friendsArray.push([friendID, i+1, req.body.quest[i]])
		}

		connection.query('INSERT INTO scores (friend_id, question_id, answer) VALUES ?', [friendsArray] , function (error, results, fields) {
			if (error) return res.send(error)

			//res.json(results);
			// query using pavan'
			connection.query('SELECT question_id, friend_id, t2friend_id, answer_difference FROM 
(SELECT *, (answer-t2answer) AS answer_difference FROM
(SELECT *
FROM scores s1
LEFT JOIN (SELECT question_id AS t2question_id, friend_id AS t2friend_id, answer AS t2answer
FROM scores s2) t2
ON t2question_id = s1.question_id) t3) t4;

', function (error, results, fields) {
				if (error) return res.send(error)
				res.json(results); 
			});

		});		

	});

	// if (req.body.quest.length > 1){

	// } else {
	// 	res.send('invalid name')
	// }
});

app.listen(3000, function(){
	console.log('listening on 3000');
});


