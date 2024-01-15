const express=require('express')
const router=express.Router()
const databcript=require('../router/signup')

const {loginget,loginpost}=require('../controller/login')


router.get('/',loginget)
router.post('/',loginpost)


module.exports=router