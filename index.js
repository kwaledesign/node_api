// setup config first before anything by requiring it
var config = require('./server/config');
// bootstrap server
var app = require('./server');
// pretty logging 
var logger = require('./server/util/logger');

app.listen(config.port);
logger.log('listening on http://localhost:' + config.port);

