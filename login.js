var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
const lg = {};
var app = express();
//moved this into our server.js 
//=======
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
//========
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
//moved this into htmnl routes
//========
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + 'public./login.html'));
});
//=========

// turn this into code sequelize can use ie. findall();

//I feel this belongs in the html routes page but unsure please verify team.
app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

module.exports = lg;