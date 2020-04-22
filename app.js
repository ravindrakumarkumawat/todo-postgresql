const express = require('express')
const path = require('path')
const cors = require('cors')

const listsRouter = require('./routes/lists')

const app = express()

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.use(cors())
app.use(express.json()) // req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/lists', listsRouter)

// Start server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server listening`)
})