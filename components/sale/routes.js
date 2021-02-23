const express = require('express')
const router = express.Router()
const multer = require('multer')
const { createSale, deleteSale, getSale, updateSale } = require('./actions')

// GET all
//router.get('/', getBooks)

router.get('/:id', getSale)


router.post('/', createSale)


router.put('/:id', updateSale)

router.delete('/:id', deleteSale)

module.exports = router