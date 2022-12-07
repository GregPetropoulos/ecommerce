const express = require('express');
const router = express.Router();
const { getCart,createCart } = require('../controllers/cartController');


//TODO CREATECART NEEDS WORK MAYBE NOT NEEDED
//CART IS CREATED FOR THE FIRST TIME
router.post('/cart',createCart)
// GET EXISTING CART AND SAVED ITEMS
router.get('/cart', getCart);


module.exports = router;
