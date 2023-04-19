const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/socialnetwork-api');

//  log mongo queries being executed
mongoose.set("debug", true);

module.exports = mongoose.connection;