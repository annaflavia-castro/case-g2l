const mongoose = require('mongoose');

mongoose.connect('mongodb://case_g2l:Secret123@cluster0-shard-00-00-dehyx.mongodb.net:27017,cluster0-shard-00-01-dehyx.mongodb.net:27017,cluster0-shard-00-02-dehyx.mongodb.net:27017/case_g2l?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
