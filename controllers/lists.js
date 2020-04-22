// const { pool } = require('../config')

// exports.get_lists = async(req, res) => {
//     pool.query('SELECT * FROM lists', (error, results) => {
//         if (error) throw error
//         res.send(results.rows)
//     })
// }

// exports.get_list = (req, res, next) => {
//     const listId = req.params.id
//     pool.query('SELECT * FROM lists WHERE list_id = $1', [listId], (error, results) => {
//         if (error) throw error
//         res.send(results.rows[0].list_name)
//     })
// }

// exports.add_list = async (req, res, next) => {
//     try {
//         const { list_name } = req.body
//         const newList = await pool.query("INSERT INTO lists (list_name) VALUES $1", [list_name])
//         res.json(newList)
//     } catch (error) {
        
//     }
// }