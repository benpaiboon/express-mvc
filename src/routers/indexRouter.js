// Init Express & Router
const express = require('express');
const router = express.Router();
const baseUrl = require('../configs/url/baseUrl');

router.get(`${baseUrl}`, (req, res) => {
  res.json({ msg: 'Welcome to Express MVC' });
});

module.exports = router;