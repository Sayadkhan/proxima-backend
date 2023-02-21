require("dotenv").config();
const express = require("express");
const projectRoutes = require("./routes/projectRoute");
const mongoose = require("mongoose");

// express app

const app = express();

//port
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/projects", projectRoutes);

// mongodb
mongoose.set("strictQuery", false); //optional
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`listening on  port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// listen for request
