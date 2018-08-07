#!/usr/bin/env node

var debug = require('debug')('app');
var app = require('./server/index');

// app.set('port', process.env.PORT || 3000);

var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Express server listening on port 3000');
});
