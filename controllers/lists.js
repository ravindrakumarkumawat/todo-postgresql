const { pool } = require('../config')

exports.get_lists = (req, res, next) => {
    pool.query('SELECT * FROM lists', (error, results) => {
        if (error) throw error
        res.send(results.rows)
    })
}

exports.get_list = (req, res, next) => {
    const listId = req.params.id
    pool.query('SELECT * FROM lists WHERE list_id = $1', [listId], (error, results) => {
        if (error) throw error
        res.send(results.rows[0].list_name)
    })
}

exports.add_list = (req, res, next) => {
    res.send('added list')
}