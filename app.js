const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({ extended: true })
)
app.use(require('./router'));

// app.get('/', (req,res) => {
//     res.json({info: 'Node.js, Express, and Postgres API'})
// })

app.get('/users', db.getAllUSers)

const PORT = 8000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})