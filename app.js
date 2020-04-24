const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

const listsRouter = require('./routes/lists')
const taskRouter = require('./routes/tasks')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser())
app.use(cors())
app.use(express.json()) // req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/lists', listsRouter)
app.use('/lists/:id/tasks', taskRouter)

// Start server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server listening`)
})