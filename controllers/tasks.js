const { pool } = require('../config')

// exports.get_tasks = async (req, res) => {
//     try {
//         const allLists = await pool.query("SELECT * FROM lists")
//         res.json(allLists.rows)
//     } catch (err) {
//         console.log(err.message)
//    }
// }

exports.add_task = async (req, res) => {
    try {
        const { id } = req.params
        const { task_name }  = req.body
        // console.log(id, task_name)
        const list = await pool.query("SELECT * FROM lists WHERE list_id = $1", [id])
        // console.log(list.rows[0])
        const newTask = await pool.query("INSERT INTO TASKS (task_name, list_id) VALUES ($1, $2) RETURNING *", [task_name, id])
        res.send(newTask.rows)
    } catch (err) {
        console.log(err.message)
   }
}


// exports.get_list = async (req, res) => {
//     try {
//         //console.log(req.params)
//         const { id } = req.params
//         const list = await pool.query("SELECT * FROM lists WHERE list_id = $1", [id])
//         res.json(list.rows[0])
//     } catch (err) {
//         console.log(err.message)
//    }
// }

exports.update_task = async (req, res) => {
    try {
        const {id} = req.params
        const {tid} = req.params
        console.log(id, tid)

        const { task_name }   = req.body
        console.log(task_name)

        const list = await pool.query("SELECT * FROM lists WHERE list_id = $1", [id])
        
        const updateTask = await pool.query("UPDATE tasks SET task_name = $1 WHERE task_id = $2", [task_name, tid])
        res.json("List name is updated")
    } catch (err) {
        console.log(err.message)
   }
}

// exports.delete_list = async (req, res) => {
//     try {
//         const {id} = req.params
//         const deleteList = await pool.query("DELETE FROM lists WHERE list_id = $1", [id])
//         res.json("List is deleted")
//     } catch (err) {
//         console.log(err.message)
//    }
// }
