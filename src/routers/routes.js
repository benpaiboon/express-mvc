// Init Dependencies
const express = require('express');
const app = express();


const routes = [
  require('./bookRouter')
]


module.exports = routes;