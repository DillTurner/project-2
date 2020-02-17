var express = require("express");
var session = require('express-session');
var PORT = process.env.PORT || 8080;

var app = express();

var db = require("./models");
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
//===========================
// I dont think we need to use this code to parse data since it is being done by other code but please verify.

/*app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());*/

//=========================

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
