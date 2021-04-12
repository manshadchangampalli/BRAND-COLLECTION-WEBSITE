var express = require('express');
var router = express.Router();
var productHelpers=require('../helpers/product-helpers')

/* GET home page. */
router.get('/', function(req, res, next) {
  productHelpers.getAllproducts().then((products)=>{
    
    res.render('user/view-products', { products,admin:false });

  })
  
  
});

module.exports = router;
