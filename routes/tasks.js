const express = require('express')
const router = express.Router({mergeParams:true})

const tasks =  require('../controllers/tasks')

router.get('/', tasks.get_tasks)
router.post('/', tasks.add_task)
router.get('/:tid', tasks.get_task)
router.put('/:tid', tasks.update_task)
//router.delete('/:tid', tasks.delete_task)
router.get('/:tid/delete', tasks.delete_task)
router.delete('/', tasks.delete_completed_task)

module.exports = router