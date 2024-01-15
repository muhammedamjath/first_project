const express = require('express')
const router = express.Router()




const { adminget, logoutget, getaddItems, postaddItems, multerPostAddItem,toDelete,toEdit,editItems } = require('../controller/admin')


router.post('/postaddItems', multerPostAddItem, postaddItems)
router.get('/', adminget)
router.get('/logout', logoutget)
router.get('/getaddItems', getaddItems)
router.get('/toDelete/:id',toDelete)
router.get('/toEdit/:id',toEdit)

router.post('/editItems/:editId',editItems)



module.exports = router 