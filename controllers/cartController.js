const asyncHandler = require('express-async-handler');

const Cart = require('../models/cartModel');
const User = require('../models/userModel');

// * @desc Get user's cart
// * @route GET /api/cart
// * access Private
const getCart = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error('User Not Found');
  }
  const cart = await Cart.findById(req.cart.id);
  if (!cart) {
    res.status(401);
    throw new Error('Cart Not Found');
  }
  if (cart.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not Authorized');
  }
  res.status(200).json(cart);
});

// * @desc POST create a user's cart
// * @route /api/cart
// * access Private
const createCart=()=>{
    console.log('createcartfunc')
}


module.exports = {
  getCart,
  createCart
};
