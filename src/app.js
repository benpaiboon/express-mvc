// Init Dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Config
const host = require('./configs/server/host');
const mlab = require('./configs/db/mlab');
const routes = require('./configs/routes/routes');
const rootUrl = require('./configs/url/rootUrl');

// Connect MongoDB
mlab.openConnection;

//Init Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Request Any Routes depend on URL path
routes.forEach(route => { app.use(`${rootUrl}`, route); });

// Running Server
app.listen(host.port, () => {
  console.log(`API running on ${host.hostname}:${host.port}${rootUrl}`);
});