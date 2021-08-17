const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
config = require('./DB'),
mongoose = require('mongoose'),
playerRoute = require('./routes/player.js');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {useNewUrlParser: true, useUnifiedTopology: true}).then(
    () => {console.log('DB is Connected!')},
    err => {console.log('Cannot connect to DB...' + err)}
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/Players', playerRoute);

let port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Listening to port ' + port);
});