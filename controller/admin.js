const addItemCollections = require('../model/productmongo')
const multer = require('multer')


// setting multer to add items


const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname)
  }
})
const upload = multer({ storage: fileStorage })


// get requst of admin

module.exports = {
  adminget: async (req, res) => {
    if (req.session.email) {
      const cards = await addItemCollections.find()
      res.render('admin', { cards })
    } else {
      res.redirect('/')
    }
  },

  //to logout 

  logoutget: (req, res) => {
    req.session.destroy();
    res.redirect('/')

  },

  //to get card to add item 

  getaddItems: (req, res) => {
    res.render('addItems')
  },

  // using multer

  multerPostAddItem:  upload.single('image'), 

  // post item to card


  postaddItems: async function(req, res) {
    console.log('worked');
    const images = req.file
    const path = 'images/' + images.filename
    const productData = new addItemCollections({
      name: req.body.name,
      price: req.body.price,
      discription: req.body.discription,
      image: path

    })

    try {
      await productData.save()
      console.log('item data saved successfully');
      res.redirect('/admin')

    }
    catch (saveError) {
      console.error('Error saving data to the database:', saveError);
      res.redirect('/admin');
    }

  },

  //to delete card from admin

  toDelete:async(req,res)=>{
    const ids=req.params.id
    const product =await addItemCollections.findById(ids)
    if(!product){
      console.log('id not find ')
    }else{
      await addItemCollections.findByIdAndDelete(ids)
      console.log('product deleted');
      res.redirect('/admin')
    }
  },

  //get of  edit card from admin

  toEdit:async (req,res)=>{
    const editId=req.params.id
      const getEdit= await addItemCollections.findById(editId)
      if(getEdit){
        res.render('cardEdit',{getEdit})
      }
  },

  //post of edit card from admin
  editItems:async(req,res)=>{
      const editId=req.params.editId
      const getEdit= await addItemCollections.findById(editId)
      const {name,price,discription}=req.body
      const id=getEdit._id
      try{

        const updateProduct=await addItemCollections.findByIdAndUpdate(id,{
          $set:{
            name:name,
            price:price,
            discription:discription
          }
        })
        res.redirect('/admin')

      }
      catch{
          console.log('error occur in update items');
      }
  }

 
  
}
 