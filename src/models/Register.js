const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    barber: String,
    price: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Register', RegisterSchema)