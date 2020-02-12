var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });


  app.get("/indica", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/indica.html"));
  });


  app.get("/sativa", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/sativa.html"));
  });


  app.get("/hybrid", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/hybrid.html"));
  });

  

};