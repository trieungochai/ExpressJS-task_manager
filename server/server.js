const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const taskRouter = require("./routes/tasks.router");

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
