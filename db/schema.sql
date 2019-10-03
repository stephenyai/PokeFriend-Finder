DROP DATABASE pokefriends_db;

CREATE DATABASE pokefriends_db;

USE pokefriends_db;

CREATE TABLE questions (
	id INT NOT NULL AUTO_INCREMENT,
	questions VARCHAR(255),
	PRIMARY KEY(id)
);

CREATE TABLE friends (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255),
	picture_link VARCHAR(255),
	PRIMARY KEY(id)
);

CREATE TABLE scores (
	id INT NOT NULL AUTO_INCREMENT,
	question_id INT NOT NULL,
	friend_id INT NOT NULL,
	answer INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (question_id) REFERENCES questions(id),
	FOREIGN KEY (friend_id) REFERENCES friends(id),
	CHECK (answer >= 0),
	CHECK (answer <= 5)
);



