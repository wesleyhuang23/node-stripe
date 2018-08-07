#!/usr/bin/env node

var debug = require('debug')('app');
var app = require('./server/index');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + this.address().port, app.settings.env);
});
