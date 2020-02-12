const axios = require('axios');

module.exports = function(app) {

  app.get("/api/all", function(req, res) {
    //request data from external api
    axios.get('http://strainapi.evanbusse.com/UyDNtOb/strains/search/name/African')
      .then(function (response) {
        // handle success
       res.send(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    
  });
}

