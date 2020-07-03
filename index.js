const serverless = require('serverless-http');
const app = require('./src');

// # export handler
module.exports.handler = serverless(app);
