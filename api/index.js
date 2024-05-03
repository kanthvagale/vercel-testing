const express = require("express");
const app = express();
const taskRoutes = require("../routes/routes");
const connectDB = require("../mongoDB/DBconnect");
const notfound = require("../middleware/notfound");
const errorHandler = require("../middleware/error-handler");

// const path = require("path");
require("express-async-errors");
require("dotenv").config();

//middleware
app.use(express.json());
// app.use(express.static("public"));

//routes
app.use("/api/v1/tasks", taskRoutes);
app.use(notfound);
// app.use(asyncWrapper);
app.use(errorHandler);

const port = process.env.PORT || 3000;
const start = async (url) => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`up and running in port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
