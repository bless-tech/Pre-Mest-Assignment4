const express = require('express')
const bookRouter = express.Router()
const bookData = require('../books.json')
const authentication = require('../middleware/auth')

bookRouter.get('/', (request, response) => {
    response.send(bookData)
})

bookRouter.post('/', authentication.authenticateToken, (request, response) => {
    const newBook = request.body.book
    bookData.push(newBook)
    response.status(200).send('Added book successfully')
})

bookRouter.get('/:bookId', (request, response) => {
    const bookId = request.params.bookId
    response.status(200).send(bookData[bookId - 1])
    
})

bookRouter.delete('/:bookId', authentication.authenticateToken, (request, response) => {
    const bookId = request.params.bookId

})

module.exports = bookRouter