const mongoose = require("mongoose");

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/maildetails");

//on connection
mongoose.connection.on("connected", () => {
    console.log("connected to database sucessfully");
  });
  
  mongoose.connection.on("error", () => {
    if (err) {
      console.log("error in database connection:" + err);
    }
  });