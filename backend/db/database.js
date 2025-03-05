const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://joelharriss69:joel2006@cluster1.kdouk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error(`Database connection failed: ${err.message}`);
      process.exit(1);
    });
};

module.exports = connectDatabase;
