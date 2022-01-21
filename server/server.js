const cors = require("cors")



const mongoose = require('mongoose');
const express = require("express") // our express server
const app = express() // generate an app object
const bodyParser = require("body-parser") // requiring the body-parser
const PORT = process.env.PORT || 3000 // port that the server is running on => localhost:3000
const categoryRoute=require("./routes/category.js")
const productRoute=require("./routes/product.js")
app.use(bodyParser.json()) // telling the app that we are going to use json to handle incoming payload
app.use(cors())



app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*') ;
    res.header('Access-Control-Allow-Credentials',true);
    res.setHeader('Access-Control-Allow-Headers',"*");
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE,OPTIONS');
    next();
})


app.use('/category',categoryRoute);


app.use('/product',productRoute);


mongoose.connect("mongodb://localhost/proCat",{useNewUrlParser:true,useUnifiedTopology:true})
   .then(()=>app.listen(PORT,()=>console.log(`Server running on port:${PORT}`)))
   .catch(error=>console.log(error));

   

   
   app.get('/',(req,res)=>{
   
      res.send("Hello world!!")
  })
  
