const mongoose = require('mongoose')

const Sales = mongoose.model('sales', { date: Date, total: Number, _idClient: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'clients'
}] })

module.exports = Sales