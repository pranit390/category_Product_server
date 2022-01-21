const Category =require("../models/category.js")


const createDetails = async(req,res)=>{

 
    const newCategory = new Category({
  

    name:req.body.name
    , products :req.body.products
     ,childCategoriesId:req.body.childCategoriesId
     ,isMainCategory:req.body.isMainCategory
    });

    try{
        await newCategory.save();
        res.status(201).json(newCategory);
    }catch(err){
        res.status(409).json({message:err.message});
    }
  }


  const getAll = async(req,res)=>{
    try{

        const details = await Category.find();
        res.status(201).json(details);

    }catch(err){
        res.status(404).json({message:err.message});
    }
}

module.exports={getAll,createDetails}