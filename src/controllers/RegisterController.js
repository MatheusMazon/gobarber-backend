const Register = require('../models/Register')
const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const { barber, price } = req.body
        const { user_id } = req.headers

        const user = await User.findById(user_id)

        if (!user) {
            return res.status(400).json({ error: 'User does not exist' })
        }

        const register = await Register.create({
            user: user_id,
            barber: barber,
            price,
        })

        console.log(register)
        return res.json(register)
    }
}