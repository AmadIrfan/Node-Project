// @ts-nocheck
// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");
const User = require("./models/userModel");
const connectDB = require("./config/db");
const authMiddleware = require("./middlewares/authMiddleware");
const flash = require("connect-flash");
const bodyParser = require("body-parser");

// Create an Express application
const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded())
// Connect to MongoDB
connectDB();

// Set up session middleware
app.use(
	session({
		secret: "your_secret_key",
		resave: false,
		saveUninitialized: false,
	})
);

// Initialize Passport.js and session middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport.js configuration
require("./config/passport")(passport);

// Routes
app.use("/auth", authRoutes); // Mount authentication routes

// Dashboard route - requires authentication
app.get("/dashboard", authMiddleware, (req, res) => {
	res.render("dashboard");
});

// Logout route
app.get("/logout", (req, res) => {
	req.logout();
	res.redirect("/login");
});

// Signup route
app.get("/signup", (req, res) => {
	res.render("signup");
});

// Set EJS as the view engine
app.set("view engine", "ejs");

// Define a route to render the login view
app.get("/login", (req, res) => {
	res.render("login");
});

// Define a route for the homepage
app.get("/", (req, res) => {
	res.send("Welcome to my application!");
});

app.use(flash());

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
