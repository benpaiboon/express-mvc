// Init Dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

// Config
const host = require('./configs/server/host');
const mlab = require('./configs/db/mlab');

// Connect MongoDB
mlab.openConnection;

//Init Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Request Any Routes depend on URL path
// app.use('/', require('./routers/bookRouter'));
const r = require('./routers/routes');
// console.log(r);
r.forEach(rItem => {
  // console.log(rItem);
  app.use(`/`, rItem);
});

// Running Server
app.listen(host.port, () => {
  console.log(`API running on ${host.hostname}:${host.port}/<route>`);
});