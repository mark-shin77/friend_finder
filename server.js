// Dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

// Localhost PORT
var PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))    
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

// getting routes through routing folder
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

// checking that the connection was established
app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
});
