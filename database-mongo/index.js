var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var accountSchema = mongoose.Schema({
  username: String,
  badges: Number
});

var Account = mongoose.model('Account', accountSchema);

var selectAll = function(callback) {
  Account.find({}, function(err, accts) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, accts);
    }
  });
};

var addUsername = function(data, callback) {
  Account.create(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, result)
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.addUsername = addUsername;