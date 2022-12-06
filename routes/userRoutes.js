const express=require('express');
const router=express.Router();

//CONTROLLER LOGIC FROM USER CONTROLLER
const {loginUser,registerUser,getMe,deleteUser} =require('../controllers/userController');

//MIDDLEWARE PROTECTING ROUTES
const {protect}= require('../middleware/authMiddleware')
const{checkObjectId}=require('../middleware/objectIdMiddleware')


//CONTROLLERS (REQ/RES) LOGIC PASSED AS ARGUMENT
// example: router.method(path, logic)
router.post('/login',loginUser)
router.post('/register',registerUser)

//Only an authenticated user can delete his account, checks for valid database id.
router.delete('/:id',protect,checkObjectId('id'),deleteUser)

// protected route for a user to get their profile data from the db
//This endpoint is never used or implemented
// router.get('/me',protect,getMe)

module.exports = router;
