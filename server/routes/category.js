const express = require('express');

const { getAll,createDetails} =require( '../controllers/category.js');

const router = express.Router();


router.post('/', createDetails);

router.get('/', getAll);



module.exports=router;