// Init Express & Router
const express = require('express');
const router = express.Router();

// Init Author Controller
const authorController = require('../controllers/authorController');

// Routes //

// GET all authors
router.get('/authors', authorController.getAuthors);

// GET one authors by id
router.get('/authors/:id', authorController.getAuthorById);

// POST create one author
router.post('/authors', authorController.createAuthor);

// PUT update one author by id
router.put('/authors/:id', authorController.updateAuthorById);

// DELETE one author by id
router.delete('/authors/:id', authorController.removeAuthorById);

module.exports = router;