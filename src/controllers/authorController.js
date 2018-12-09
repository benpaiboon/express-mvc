// Init Author Model
const Author = require('../models/authorModel');

// Route Functions
const authorController = {
  getAuthors: async (req, res) => {
    try {
      res.send(await Author.find({}));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAuthorById: async (req, res) => {
    try {
      res.send(await Author.findById({ _id: req.params.id }));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createAuthor: async (req, res) => {
    try {
      res.send(await Author.create(req.body));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateAuthorById: async (req, res) => {
    try {
      res.send(await Author.findByIdAndUpdate({ _id: req.params.id }, req.body, (error) => {
        if (error) res.status(500).json({ error: error.message });
        Author.findOne({ _id: req.params.id })
      }));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  removeAuthorById: async (req, res) => {
    try {
      res.send(await Author.findByIdAndRemove({ _id: req.params.id }));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = authorController;