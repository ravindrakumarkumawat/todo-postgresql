const express = require('express')
const path = require('path')
const cors = require('cors')
const pool  = require('./config')

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

// Create a list
app.post('/lists', async (req, res) => {
    try {
        const { list_name }  = req.body
        const newList = await pool.query("INSERT INTO lists (list_name) VALUES ($1) RETURNING *", [list_name])
        res.json(newList.rows[0])
    } catch (err) {
        console.log(err.message)
   }
})

// get all lists
app.get('/lists', async (req, res) => {
    try {
        const allLists = await pool.query("SELECT * FROM lists")
        res.json(allLists.rows)
    } catch (err) {
        console.log(err.message)
   }
})

// get a list

// Update a list

// Delete a list

//app.use('/lists', listsRouter)


// Start server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server listening`)
})