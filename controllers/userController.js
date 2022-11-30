// ROUTE LOGIC

//HANDLES EXCEPTIONS IN ASYNC ROUTES
const asyncHandler = require('express-async-handler');

//BCRYPTJS FOR HASHING PW
const bcrypt = require('bcryptjs');

//BRING IN USER SCHEMA MODEL
const User = require('../models/userModel');

//BRING IN JWT
const jwt = require('jsonwebtoken');

// *-------------------------------------------------------
// * @desc Register a new user
// * @route /api/users
// * access Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // VALIDATE ALL FIELDS ARE FILLED
  if (!firstName || !lastName || !email || !password) {
    //SEND ERROR TO CLIENT FOR USER NOT FILLING ALL FIELDS
    res.status(400);
    throw new Error('Please include all required fields');
  }

  //CHECK IF USER ALREADY EXISTS
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  //HASH THE PASSWORD WITH BCRYPT AND PROMISE BASED FUNCTION
  const salt = await bcrypt.genSalt(10);
  //HASH AND SALT
  const hashedPassword = await bcrypt.hash(password, salt);

  //CREATE USER
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword
  });

  //  CHECK FOR USER BEING CREATED 201
  if (user) {
    res.status(201).json({
      //MONGODB ID IS _ID
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// * @desc Login a new user
// * @route /api/users/login
// * access Public
const loginUser = asyncHandler(async (req, res) => {
  //DESTRCUTURE BODY
  const { email, password } = req.body;

  //FIND USER BY EMAIL IN THE DB
  const user = await User.findOne({ email });

  //MATCH USER(EMAIL) FROM DB AND PLAINTEXT PASSWORD FROM BODY AGAINST HASH PASSWORD IN DB, THEN RETURN JSON USER INFO AND NEW TOKEN
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      //MONGODB STORES THE ID AS A KEY _ID
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(401);
    throw new Error('invalid credentials');
  }
});

// GENERATE THE TOKEN
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

module.exports = {
  loginUser,
  registerUser
};
