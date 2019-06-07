const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({ extended: true })
)
app.use(require('./routers'))

const PORT = 8000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})