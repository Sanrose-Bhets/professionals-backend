require('dotenv').config();

const express = require('express');
const professionals = require('./data/professional.js');
const app = express();
const port = process.env.PORT || 3000;

//connecting to DB
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.error("Could not Connect to Mongo DB", err));

// Middleware to parse JSON request bodies
app.use(express.json());


//importing routes
const professionalRoutes = require("./routes/professionalroutes")

//using the app
app.use("/api/professionals", professionalRoutes)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});