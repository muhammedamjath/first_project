const collection=require('../model/signupmongo')
const addItemCollections=require('../model/productmongo')
const bcrypt = require('bcrypt');



module.exports={
    loginget:(req,res)=>{
        if(req.session.admin){
            res.redirect('/admin')
        }
        else if(req.session.email){
            res.redirect('/user')
        }
        else{
            res.render('login')
        } 
    },
    loginpost: async (req,res)=>{

        const cards = await addItemCollections.find()
    
        try{
            const findUser= await collection.findOne({email:req.body.email})
            const pass= await bcrypt.compare(req.body.password,findUser.password)
            console.log(pass)
            if(pass){
                req.session.email=req.body.email
               if(req.session.email){
                    if(findUser.roll==='admin'){
                        req.session.admin=true
                        res.render('admin',{cards})
                    }else{
                        res.render('user',{cards})
                    }
               }
            }else{
                res.send('entered passwored is wrong')
            }
        }
        catch{
            res.send('wrong user')
        }
    }
}