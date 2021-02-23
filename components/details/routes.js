const express = require('express')
const router = express.Router()
const multer = require('multer')
const { createDetail, deleteDetail, getDetail, updateDetail } = require('./actions')
const setCover = require('../../middlewares/setCover')

// GET all
//router.get('/', getBooks)

router.get('/:id', getDetail)


router.post('/', createDetail)


router.put('/:id', updateDetail)

router.delete('/:id', deleteDetail)

module.exports = router