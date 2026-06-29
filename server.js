const express = require('express');
const app = express();
const port = 3000;

//connecting to DB
const mongoose = require(mongoose);
mongoose.connect("mongodb://localhost:27017/professionalsDB",{
  userNewUrlParser: true,
  useUnifiedTopology:true,
})
.then(() => console.log("connected to MongoDB"))
.catch((err) => console.error("Could not Connect to Mongo DB",err2))

// Middleware to parse JSON request bodies
app.use(express.json());

// import professionals data
const professionals = require('./data/professional.js');

//importing routes
const professionalRoutes = require("./routes/professionalroutes")

//using the app
app.use("/api/professionals", professionalRoutes)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});