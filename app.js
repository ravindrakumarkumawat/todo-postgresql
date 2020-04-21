const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World!')
})
app.get('/lists', function (req, res) {
    res.send('Hello World!')
})

app.post('/lists', function (req, res) {
    res.send('Got a POST request')
})



// Start server
app.listen(process.env.PORT || 3002, () => {
    console.log(`Server listening`)
})