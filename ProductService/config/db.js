const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const response = await mongoose.connect(
      "mongodb+srv://jithendharkampati04:TKv6qmtkvX4aM3SP@cluster0.xv5wjir.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }//commit 
  //one
  //two
};

module.exports = connectDB;
