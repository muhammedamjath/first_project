const express=require('express')
const router=express.Router()


const {userget,logoutget,userdetailesget,postprofileDetailes,getcompleteprofile}=require('../controller/user')


router.get('/',userget)
router.get('/logout',logoutget)
router.get('/userDetailes',userdetailesget)
router.get('/showprofile',getcompleteprofile)

router.post('/pofileDetailes',postprofileDetailes)



 
module.exports=router