const { default: mongoose } = require('mongoose')
const addItemCollections=require('../model/productmongo')
const profileCollections = require('../model/profileDetailes')
const signupCollection=require('../model/signupmongo')


module.exports={


    userget:async(req,res)=>{
        if(req.session.email){
        const cards = await addItemCollections.find()
          res.render('user', {cards})
        }else{
            res.redirect('/')
        }
    },


    logoutget:(req,res)=>{
        req.session.destroy();
        res.redirect('/')
    },


    userdetailesget:async(req,res)=>{
        if(req.session.email){
            res.render('userDetailes')
        }else{
            res.redirect('/user')
        }
    },


    postprofileDetailes: async( req,res)=>{
        if(req.session.email){
        const mail=req.session.email
        const proData=await signupCollection.findOne({email:mail})
        const userIdObject=new mongoose.Types.ObjectId(proData._id)
        
        await profileCollections.updateOne({id:userIdObject},{$set:{
            address:req.body.address,
            number:req.body.number,
            gender:req.body.gender,
            dob:req.body.dob, 
            id:userIdObject}},{upsert:true})
        console.log('profile data added successfully');
        const cards=await addItemCollections.find()
        res.redirect('/user')
        }else{
            res.redirect('/userDetailes')
        }

    },


    getcompleteprofile:async (req,res)=>{

        if(req.session.email){
            
            const signData= await signupCollection.findOne({email:req.session.email})
            const prodata= await profileCollections.findOne({id:signData._id})
            if(prodata){
            const proData= await signupCollection.aggregate([
                {
                    $match:{email:req.session.email}
                },
               {
                $lookup:{
                    from:"profilecollections",
                    localField:"_id",
                    foreignField:"id",
                    as:"proCollection"
                }
               }
            ])
            console.log(proData);
            const objData=proData[0].proCollection[0]
            console.log(objData);
            res.render('profile',{signData,objData}) 
        }else{
            res.render('profile',{signData,objData:''})
        }
        }else{
            console.log('not get proData');
            res.redirect('/user')
        }
    } 

}