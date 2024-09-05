const {Router} = require("express")
const postsController = require("../controllers/postsController")
const router = Router()

router.get('/getPosts',postsController.getPosts)
router.post('/addPost',postsController.addPost)
router.post('/deletePost',postsController.deletePost)


module.exports = router