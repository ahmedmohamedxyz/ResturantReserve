const express=require("express");
const dotenv=require("dotenv");
//const connectDB= require('./config/db');
dotenv.config({path:"./config/config.env"});
//connectDB();
const app=express();



app.get('/',(req,res)=>{
    res.send('Hello world');
});

app.get('/books',(req,res)=>{
    res.send('Hello books');
});


const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`Server started in ${process.env.NODE_ENV} mode` ));