// Init Express & Router
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'Welcome to Express MVC' });
});

module.exports = router;