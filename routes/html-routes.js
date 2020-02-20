var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
// this serves our index page 
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
  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });
  
  app.get("/login", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/login.html"));
  });
 
// need to add a profile html route.
};