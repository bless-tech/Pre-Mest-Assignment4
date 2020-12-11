const express = require('express')
const adminRouter = express.Router()
const authentication = require('../middleware/auth')


adminRouter.post('/login', (req, res) => {
    const { username, password } = req.body
    const token = authentication.generateAccessToken(username)
    res.status(200).send({ "message": "successful login!", "token": token })
})


adminRouter.post('/logout', (req, res) => {
})

module.exports = adminRouter