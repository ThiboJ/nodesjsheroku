const express = require("express");
const server = express();

require('./settings')(server);          console.log("Loading Settings...");
require('./models')(server);            console.log("Loading Models...");
require('./middlewares')(server);       console.log("Loading Middlewares...");
require('./actions')(server);           console.log("Loading Actions...");
require('./routes')(server);            console.log("Loading Routes...");

console.log('Server listening on port '+server.settings.port);
server.listen(server.settings.port);