const express = require('express')
const app = express()
const port = 3002
const adminRouter = require('./controllers/admin')
const authorRouter = require('./controllers/author')
const bookRouter = require('./controllers/book')

app.use(express.json())

app.use('/admin', adminRouter)
app.use('/authors', authorRouter)
app.use('/books', bookRouter)

app.listen(port, () => {
    console.log(`Server is listening at ${port}`)
})