// FriendFinder

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//   app.use('public', express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/app/public'));

// Import routes and give the server access to them.
var routesAPI = require("./app/routing/apiRoutes.js");
var routesHTML = require("./app/routing/htmlRoutes.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use()
app.use(routesAPI, routesHTML);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});