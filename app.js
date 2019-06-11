const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./routers'))
app.use(express.static(__dirname + '/client/build/'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})



const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})