const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./database/connect");
require("dotenv").config();

const taskRouter = require("./routes/tasks.router");

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", taskRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
