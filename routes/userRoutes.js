const {Router} = require('express')
const User = require('../controllers/userController')

const router = Router()

router.get('/getUsers',User.getUsers)
router.post('/addUser',User.addUser)
router.post('/deleteUser',User.deleteUser)

module.exports = router