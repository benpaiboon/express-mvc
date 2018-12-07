// Init Express & Router
const express = require('express');
const router = express.Router();

// Init Book Controller
const bookController = require('../controllers/bookController');

// Routes //

// GET all books
router.get('/books', bookController.getBooks);

// GET one books by id
router.get('/books/:id', bookController.getBookById);

// POST create one book
router.post('/books', bookController.createBook);

// PUT update one book by id
router.put('/books/:id', bookController.updateBookById);

// DELETE one book by id
router.delete('/books/:id', bookController.removeBookById);

module.exports = router;