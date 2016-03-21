'use strict';

/*
 	Webserver for Votes.
 	John Morgan 3/20/2016
*/

var express = require('express');

var portno = 3000;   //local version

var app = express();

//express static module (http://expressjs.com/en/starter/static-files.html)
app.use(express.static(__dirname));

var server = app.listen(portno, function () {
  var port = server.address().port;
});
