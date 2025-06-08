const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

// Connect to MongoDB using full URI from .env
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
})
.then(() => {
  console.log("✅ Connected to MongoDB Atlas");
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

// Schema and model
const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Registration = mongoose.model("Registration", registrationSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve HTML files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/index.html"));
});

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await Registration.findOne({ email });
    if (!existingUser) {
      const registrationData = new Registration({ name, email, password });
      await registrationData.save();
      res.redirect("/success");
    } else {
      console.log("User already exists");
      res.redirect("/error");
    }
  } catch (error) {
    console.error("❌ Error during registration:", error);
    res.redirect("/error");
  }
});

app.get("/success", (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/success.html"));
});

app.get("/error", (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/error.html"));
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
