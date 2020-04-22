const express = require('express')
const path = require('path')
const cors = require('cors')

const listsRouter = require('./routes/lists')

const app = express()

// view engine setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', listsRouter)
app.use('/lists', listsRouter)


// Start server
app.listen(process.env.PORT || 3002, () => {
    console.log(`Server listening`)
})