
// * MONGOOSE TO DATABASE SCHEMA
// * Mongoose returns a promise
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    //   connect to db with uri and return promise
    const conn = await mongoose.connect(process.env.MY_MONGO_URI);
    console.log(`MongoDB Connected...`);
  } catch (err) {
    console.log(`Error: ${err.message}`.red.underline.bold);
    process.exit(1);
  }
};
module.exports= connectDB
