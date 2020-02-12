const axios = require('axios');

module.exports = function(app) {
  // Get all books
  app.get("/api/all", function(req, res) {
    axios.get('http://strainapi.evanbusse.com/UyDNtOb/strains/search/name/Zoom Pie')
      .then(function (response) {
        // handle success
        return res.json(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    
  });
}

