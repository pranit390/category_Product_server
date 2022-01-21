
const mongoose = require("mongoose") // requiring the mongoose package

const ProductSchema = mongoose.Schema({
  // creating a schema for todo
  name:{type: String},
  price:{type: String,require:true},
  stock  : { type: Number, required: true }    
  

})

const productModel =  mongoose.model('Product', ProductSchema); // creating the model from the schema

module.exports = productModel // exporting the model