const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/mongoProject')

.then(()=>{
    console.log('mongodb connected');
})
.catch(()=>{
    console.log('failed to connecct');
})

const signupScema=new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    // confirpassword:{
    //     type:String,
    //     required:true
    // },
    roll:{
        type:String,
        required:true,
        default:"user"
    }

})


const signupCollection=new mongoose.model('signupDetailes',signupScema)

module.exports=signupCollection
