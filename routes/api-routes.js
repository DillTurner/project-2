const axios = require('axios');
var db = require("../models");
const jsonAll = require("../all-strains.json")
module.exports = function(app) {

  app.get("/api/all", function(req, res) {

 
      res.json(jsonAll);
  
    //request data from external api
    
  });
  // call for all strains
  /*app.get("/api/all",function(req,res){
    axios.get('http://strainapi.evanbusse.com/UyDNtOb/strains/search/all')
    .then(function (response) {
    
     res.json(response.data);
    })
      .catch((error)=>{
        console.log(error)
      });
})*/

  app.get("/api/indica",function(req,res){
    axios.get('https://strainapi.evanbusse.com/UyDNtOb/strains/search/race/Indica')
    .then(function (response) {
      console.log(response);
     res.json(response);
    })
      .catch((error)=>{
        console.log(error)
      });
    })
 /* app.get("/api/sativa",function(req,res){
    axios.get('strainapi.evanbusse.com/UyDNtOb/strains/search/race/Sativa')
    .then(function (response) {

     res.json(response.data);
    })
      .catch((error)=>{
        console.log(error)
      });
    })
    
  app.get("/api/hybrid",function(req,res){
    axios.get('strainapi.evanbusse.com/UyDNtOb/strains/search/race/Hybrid')
    .then(function (response) {

     res.json(response.data);
    })
      .catch((error)=>{
        console.log(error)
      });
})
  
}

