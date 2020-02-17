const axios = require('axios');
var db = require("../models");
const jsonAll = require("../json/all-strains.json");
const jsonIndica = require("../json/indica.json");
const jsonSativa = require("../json/sativa.json");
const jsonHybrid = require("../json/hybrid.json");
module.exports = function(app) {

  app.get("/api/all", function(req, res) {
      res.json(jsonAll);
    
  });

  app.get("/api/indica",function(req,res){
      res.json(jsonIndica);

    })
  app.get("/api/sativa",function(req,res){
        res.json(jsonSativa);

    });
    
  app.get("/api/hybrid",function(req,res){
      res.json(jsonHybrid);
})
  
}

