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
      db.jane.findAll().then(function(response){
		  res.json(response);
	  })
    
  });

  app.get("/api/indica",function(req,res){
	db.jane.findAll({
		where: {
			Value_race: 'indica'
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
/*app.post('/auth', function(request, response) {
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
});*/
//========================================


// I feel this belongs in the html routes page but please verify team.
//===========================================

}

