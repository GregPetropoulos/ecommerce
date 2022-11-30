const express=require('express');
const router=express.Router();

//CONTROLLER LOGIC FROM USER CONTROLLER
const {loginUser,registerUser} =require('../controllers/userController');

router.post('/login',loginUser)

router.post('/register',registerUser)

module.exports = router;
