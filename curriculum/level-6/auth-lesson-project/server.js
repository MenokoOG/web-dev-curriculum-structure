const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();
const { expressjwt } = require("express-jwt");

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Connect to MongoDB
async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}
connectToDb();

// Routes
app.use("/api/auth", require("./routes/authRouter"));
app.use(
  "/api/main",
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);
app.use("/api/main/issues", require("./routes/issueRouter"));
app.use("/api/main/comments", require("./routes/commentRouter"));


// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
