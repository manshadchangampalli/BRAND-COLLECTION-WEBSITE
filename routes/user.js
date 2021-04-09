var express = require('express');
var router = express.Router();

/* GET home page. */
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
  res.render('index', { products,admin:false });
});

module.exports = router;
