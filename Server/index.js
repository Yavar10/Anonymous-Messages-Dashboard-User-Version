const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const db = require("./config/db");
const { verifyJWT } = require("./middlewares/auth.middleware");
const Todo = require("./Models/todo.models");
const { registerUser, loginUser, logoutUser } = require("./controllers/user.controller");

db();

const app = express();
const port = process.env.PORT || 7000;

// Middlewares
app.use(cors({
  origin: "https://anonymous-messages-dashboard-user-version.onrender.com",  // Update to match your frontend
  credentials: true                // Allow cookies to be sent
}));
app.use(express.json());
app.use(cookieParser());

// Base route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Auth routes
app.post("/reg", registerUser);
app.post("/login", loginUser);

// Protected route to add task
app.post("/add", verifyJWT, async (req, res) => {
  try {
    console.log(req.headers.authorization)
    const { task } = req.body;
    console.log("📥 req.user at /add:", req.user);

    if (!task || task.trim() === "") {
      return res.status(400).json({ error: "Task field is required" });
    }
console.log("📝 Task:", task, "👤 Owner ID:", req.user._id);
    const newTask = await Todo.create({ 
      task, 
      owner: req.user._id // Comes from verifyJWT
    });

    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong", details: err.message });
  }
});

// Get all tasks (you can protect this if needed)
app.get("/get", async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
});

// Delete single task
app.delete("/del", verifyJWT, async (req, res) => {
  try {
    console.log("first try line in del")
    const task = await Todo.findById(req.body._id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    // Check if the task belongs to the logged-in user
    if (req.user._id.toString()!==process.env.ADMIN_ID&&task.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    await Todo.findByIdAndDelete(req.body._id);

    res.status(200).json({ message: "Task deleted successfully", deletedTaskId: task._id });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// Delete all tasks
app.delete("/deleteAll",verifyJWT, async (req, res) => {
  if ((req.user._id.toString())===process.env.ADMIN_ID)
 {
  await Todo.deleteMany()
  res.status(200).send("Deleted All")
}
  else{
    res.status(401).send("Not AUthoried");
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}); 