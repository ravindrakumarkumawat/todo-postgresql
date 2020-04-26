const express = require('express')
const router = express.Router()

const lists =  require('../controllers/lists')

router.get('/', lists.get_lists)
router.post('/', lists.add_list)
router.get('/:id', lists.get_list)
// router.put('/:id', lists.update_list)
router.post('/:id', lists.update_list)
router.delete('/:id', lists.delete_list)

module.exports = router