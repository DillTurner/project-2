const axios = require('axios');
var path = require("path");
var db = require("../models");
const jsonAll = require("../json/all-strains.json");
const jsonIndica = require("../json/indica.json");
const jsonSativa = require("../json/sativa.json");
const jsonHybrid = require("../json/hybrid.json");
module.exports = function(app) {

// servers all our json files
//===========================
  app.get("/api/all", function(req, res) {
      res.json(jsonAll);
    
  });

  app.get("/api/indica",function(req,res){
	db.jane.findAll({
		where: {
			Value_race: 'sativa'
		}
	}).then(function(resopnse){
		res.json(resopnse);
	});
    })
  app.get("/api/sativa",function(req,res){
	db.jane.findAll({
		where: {
			Value_race: 'sativa'
		}
	}).then(function(resopnse){
		res.json(resopnse);
	});

    });
    
  app.get("/api/hybrid",function(req,res){
	db.jane.findAll({
		where: {
			Value_race: 'hybrid'
		}
	}).then(function(resopnse){
		res.json(resopnse);
	});
	  
});
//==================================

//turn this code into code that sequelize can use
app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('../public/profile.html');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.post('/api/login', function(req, res){
	db.Users.create({
		username: req.body.text,
		password: req.body.text
	}).then(function(dbUsers){
		res.json(dbUsers);
	});
});

app.delete("/api/login/:id",function(req, res){
	db.Users.delete({
		where: {
			id: req.params.id
		}
	}).then(function(dbUsers){
		res.json(dbUsers);
	});
});;

app.put("api/login", function(req, res){
	db.Users.update({
		username: req.body.text,
		password: req.body.text,
	},{
		where: {
			id: req.body.id
		}
	}).then(function(dbUsers){
		res.json(dbUsers);
	});
});

var favs = Sample;
favs.findAll({
limit: 420,
});

//========================================


// I feel this belongs in the html routes page but please verify team.
app.get('/profile', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});
//===========================================

}


