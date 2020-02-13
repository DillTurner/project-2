const axios = require('axios');
var db = require("../models");

module.exports = function(app) {

  app.get("/api/all", function(req, res) {

    db.jane.findAll().then(function(data){
      res.json(data);
    })
    //request data from external api
    
  });
  app.get("/api/indica",function(req,res){
    axios.get('http://strainapi.evanbusse.com/UyDNtOb/strains/search/race/Indica')
    .then(function (response) {

     res.json(response.data);
    })
      .catch((error)=>{
        console.log(error)
      });
})
  
}

