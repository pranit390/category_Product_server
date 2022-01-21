const express = require('express');

const { getAll,createDetails} =require( '../controllers/product.js');

const router = express.Router();


router.post('/', createDetails);

router.get('/', getAll);



module.exports=router;