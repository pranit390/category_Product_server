const Product =require("../models/product.js")


const createDetails = async(req,res)=>{

 
    const newproduct = new Product({
  

        name:req.body.name,
        price:req.body.price,
        stock  :req.body.stock  
    
    

    });

    try{
        await newproduct.save();
        res.status(201).json(newproduct);
    }catch(err){
        res.status(409).json({message:err.message});
    }
  }



  const getAll = async(req,res)=>{
    try{

        const details = await Product.find();
        res.status(201).json(details);

    }catch(err){
        res.status(404).json({message:err.message});
    }
}

module.exports={getAll,createDetails}