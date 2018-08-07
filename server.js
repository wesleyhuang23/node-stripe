#!/usr/bin/env node

var debug = require('debug')('app');
var app = require('./server/index');

var port = process.env.PORT || 3000

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
