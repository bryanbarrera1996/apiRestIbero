const express = require('express')
const router = express.Router()
const multer = require('multer')
const { createBook, deleteBook, getBook, getBooks, updateBook } = require('./actions')
const coverUploader = multer({ dest: 'covers/' })
const setCover = require('../../middlewares/setCover')

// GET all
router.get('/', getBooks)

// GET by ID
router.get('/:id', getBook)

// POST Create a Book
router.post('/', createBook)
//coverUploader.single('cover'), setCover
// PUT Update a Book's info
router.put('/:id', updateBook)
// coverUploader.single('cover'), setCover
// DELETE by ID
router.delete('/:id', deleteBook)

module.exports = router
