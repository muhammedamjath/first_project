const express=require('express')
const router=express.Router()

const {signupget,signuppost}=require('../controller/signup')


router.get('/',signupget)
router.post('/',signuppost)

module.exports=router