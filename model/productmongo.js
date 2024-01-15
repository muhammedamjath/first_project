const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/mongoProject')
.then(()=>{
    console.log('mongodb 2  connected');
})
.catch(()=>{
    console.log('mongodb 2 not connected');

})

const itemScema=new mongoose.Schema({
    name:{
        type:String, 
        required:true
    },
    price:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    } 
})

const addItemCollections=new mongoose.model('itemCollection',itemScema)


module.exports=addItemCollections