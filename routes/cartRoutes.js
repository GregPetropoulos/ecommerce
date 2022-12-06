const express = require('express');
const router = express.Router();
const { getCart } = require('../controllers/cartController');

router.post('/cart', getCart);

module.exports = router;
