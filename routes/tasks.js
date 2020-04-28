const express = require('express')
const router = express.Router({mergeParams:true})

const tasks =  require('../controllers/tasks')

router.get('/', tasks.get_tasks)
router.post('/', tasks.add_task)
router.get('/:tid', tasks.get_task)
//router.put('/:tid', tasks.update_task)
router.post('/:tid', tasks.update_task)
router.get('/:tid/priority', tasks.task_priority)
router.post('/:tid/priority', tasks.update_task_priority)
router.get('/:tid/priority/edit', tasks.edit_priority)

//router.delete('/:tid', tasks.delete_task)
router.get('/:tid/delete', tasks.delete_task)
router.delete('/', tasks.delete_completed_task)

module.exports = router