const mongoose=require('mongoose')
const  ObjectId  = require('mongodb');


mongoose.connect('mongodb://localhost:27017/mongoProject')
.then(()=>{
    console.log('mongodb 3  connected');
})
.catch(()=>{
    console.log('mongodb 3 not connected');

})

const profileScema=new mongoose.Schema({
    address:{
        type:String, 
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    // image:{
    //     type:String,
    //     required:true
    // },
    gender:{
        type:String,
        required:true
    } ,
    dob:{
        type:String,
        required:true
    },
    id:{
        type:mongoose.Types.ObjectId,
        required:true
    }
})

const profileCollections=new mongoose.model('profileCollection',profileScema)


module.exports=profileCollections