var express = require('express');
var router = express.Router();

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
router.get('/addproduct',function(req,res){
 res.render('admin/add-products')
})

module.exports = router;
