var mongoose = require("mongoose");
var dbName = 'mongodb://localhost/project3_mungry';

// Map Global Promise to Resolve Mongo Promise Warning
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || dbName )
	.then(() => console.log('Mongodb connected...'))
	.catch(err => console.log(err));

module.exports.Recipe = require("./recipe");
module.exports.Comment = require("./comment");
