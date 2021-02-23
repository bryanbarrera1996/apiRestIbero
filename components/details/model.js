const mongoose = require('mongoose')

const Details = mongoose.model('details', { nameBook: String, unitPrice: Number, count: Number, _idBook: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'books'
}] })

module.exports = Details