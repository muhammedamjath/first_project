const express=require('express')
const app=express()
require('dotenv').config()
const mongoose=require('mongoose')
const ejs=require('ejs')
const session=require('express-session')
const nocache = require("nocache");


const login=require('./router/login')
const signup=require('./router/signup')
const user=require('./router/user')
const admin=require('./router/admin')

const port=process.env.port || 6060
const secret=process.env.secret
 
 
app.set('view engine','ejs')
app.set('views','views')

app.use(nocache());
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret,
    resave: true,
    saveUninitialized: true
  })) 

 
  app.use('/getsignup',signup)
  app.use('/signup',signup)
  app.use('/user',user);
  app.use('/user/pofileDetailes',user)
  app.use('/user/logout',user)
  app.use('/user/userDetailes',user)
  app.use('/admin',admin)
  app.use('/',login)



app.listen(port,()=>{
    console.log(`server started on ${port} port`)
})    