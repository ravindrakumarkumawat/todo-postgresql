const express = require('express')
const router = express.Router({mergeParams:true})

const tasks =  require('../controllers/tasks')

// router.get('/', tasks.get_tasks)
router.post('/', tasks.add_task)
// router.get('/:id', tasks.get_task)
// router.put('/:id', tasks.update_task)
// router.delete('/:id', tasks.delete_task)

module.exports = router