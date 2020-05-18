const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb://case_g2l:Secret123@cluster0-shard-00-00-dehyx.mongodb.net:27017,cluster0-shard-00-01-dehyx.mongodb.net:27017,cluster0-shard-00-02-dehyx.mongodb.net:27017/case_g2l?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.use(express.json());
server.use(routes);

server.listen(3339);
