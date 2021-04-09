var express = require('express');
var router = express.Router();
var productHelpers=require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  products=[
    {
    name:'allensolly',
    category:'shirts',
    price:'499',
    image:'https://images-na.ssl-images-amazon.com/images/I/513favBlpgL._UX569_.jpg'

  },
  {
    name:'levis',
    category:'shirts',
    price:'499',
    image:'https://images-na.ssl-images-amazon.com/images/I/513favBlpgL._UX569_.jpg'

  },
  {
    name:'us polo',
    category:'shirts',
    price:'499',
    image:'https://images-na.ssl-images-amazon.com/images/I/513favBlpgL._UX569_.jpg'

  },
  {
    name:'otto',
    category:'shirts',
    price:'499',
    image:'https://images-na.ssl-images-amazon.com/images/I/513favBlpgL._UX569_.jpg'

  },
]
  res.render('admin/view-products', { admin:true,products });
});
router.get('/add-product',function(req,res){
 res.render('admin/add-product')
})
router.post('/add-product',(req,res)=>{
  

  productHelpers.addProduct(req.body,(id)=>{
    let image=req.files.Image
    
    image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render('admin/add-product')
      }else
      console.log('err'+err);
    })
    
  })
})

module.exports = router;
