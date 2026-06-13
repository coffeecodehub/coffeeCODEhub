const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://coffeecodehub_db_user:2hUENhtWJrPJPkHQ@cluster0.yk53rnf.mongodb.net/?appName=Cluster0');

    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;