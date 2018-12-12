// Init Dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Config
const host = require('./configs/server/host');
const mlab = require('./configs/db/mlab');
const rootUrl = require('./configs/url/rootUrl');

// Connect MongoDB
mlab.openConnection;

// Load Routes
const routes = require('./routers/init');

//Init Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Request any Rroutes depend on URL path
routes.forEach(route => { app.use(`${rootUrl}`, route); });

// Handling Errors 
app.use((req, res) => {
  const error = new Error('Not found the requested url.');
  res.status(404 || 500);
  res.json({ error: error.message });
});

// Running Server
app.listen(host.port, () => {
  console.log(`API running on ${host.hostname}:${host.port}${rootUrl}`);
});