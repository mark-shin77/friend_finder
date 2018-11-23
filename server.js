var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

// create application/json parser
var jsonParser = bodyParser.json();
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))    
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

// checking that the connection was established
app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
});
