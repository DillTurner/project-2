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

  app.get('/login', function(request, response) {
    response.sendFile(path.join(__dirname + '../public/login.html'));
  });
  app.get('/profile', function(request, response) {
    /*if (request.session.loggedin) {
      response.send('Welcome back, ' + request.session.username + '!');
    } else {
      response.send('Please login to view this page!');
    }
    response.end();*/
  });
// need to add a profile html route.
};