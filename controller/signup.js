const collection = require('../model/signupmongo')
const bcrypt = require('bcrypt');


const passwordRejex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const emailRejex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

module.exports={
    signupget:(req,res)=>{
        res.render('signup')
    },
    signuppost:async (req,res)=>{
        const findUser= await collection.findOne({email:req.body.email})
        if(findUser){
            res.send('This Email is already exist ')
        }else{
    
            if(! passwordRejex.test(req.body.password) || ! emailRejex.test(req.body.email)){
                res.send('password is not valid')
            }else{
            const hashpass=await bcrypt.hash(req.body.password,10)
            // const hashpass2=await bcrypt.hash(req.body.password,10)
    
            const signupData=new collection({
                firstName:req.body.fname,
                lastName:req.body.lname, 
                email:req.body.email,
                password:hashpass,
                // confirpassword:hashpass2
            })
    
    
    
        await signupData.save()
        // module.exports=signupData
    
    
            res.render('login')
    }}}
}