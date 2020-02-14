const axios = require('axios');
var db = require("../models");

module.exports = function(app) {

  /*app.get("/api/all", function(req, res) {

    db.jane.findAll().then(function(data){
      res.json(data);
    })
    //request data from external api
    
  });*/
  // call for all strains
  app.get("/api/all",function(req,res){
    axios.get('http://strainapi.evanbusse.com/UyDNtOb/strains/search/all')
    .then(function (response) {

     res.json(response.data);
    })
      .catch((error)=>{
        console.log(error)
      });
})
  app.get("/api/indica",function(req,res){
    axios.get('strainapi.evanbusse.com/UyDNtOb/strains/search/race/indica')
    .then(function (response) {

     res.json(response.data);
    })
      .catch((error)=>{
        console.log(error)
      });
    })

  app.get("/api/sativa",function(req,res){
    axios.get('strainapi.evanbusse.com/UyDNtOb/strains/search/race/sativa')
    .then(function (response) {

     res.json(response.data);
    })
      .catch((error)=>{
        console.log(error)
      });
    })
    
  app.get("/api/hybrid",function(req,res){
    axios.get('strainapi.evanbusse.com/UyDNtOb/strains/search/race/hybrid')
    .then(function (response) {

     res.json(response.data);
    })
      .catch((error)=>{
        console.log(error)
      });
})
  
}

