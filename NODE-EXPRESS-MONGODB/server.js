const express = require('express');
// const mangoose=require('mangoose');
// const url ='mongodb://localhost/AnimalDbex'
const cors = require('cors');

// mongoose.connect(url,{useNewUrlParser:true})
// const con=mangoose.connection

// con.on('open',function(){
//     console.log('db connected...')
// })



const app = express();
app.use(express.json());
app.use(express.urlencoded({entended:true}))

//port 
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Our server is running at port ${PORT}`)
})

//get method

app.get('/',(req,res)=>{
   res.json({message:'Welcome to Rest API sai'})
})

// const hello=require("./hello");
// const { default: mongoose } = require('mongoose');
// console.log(hello);