var mongoose = require('mongoose');
var Product = require('./product.js');




var CategorySchema = mongoose.Schema({
  name      		: { type: String, required: true }
 , products         : [Product.schema]
  ,childCategoriesId:[String]
  ,isMainCategory:{type:Boolean}
 
  
});
module.exports = mongoose.model('Category', CategorySchema);