const express = require('express');
const bodyParser = require('body-parser');


const app = express();
require('./db');

app.use(bodyParser.json({ limit: '50mb', extended: false }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

app.get('/', (req, res) => {
  res.send('hello');
});

const book = require('./Book/bookRoutes');

app.use('/', book);

module.exports = app;
