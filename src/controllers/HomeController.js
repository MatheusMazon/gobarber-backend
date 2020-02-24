const Register = require('../models/Register')

module.exports = {
    async show(req, res) {

        const registers = await Register.find()

        return res.json(registers)
    }
}