import express from "express";
const app = express();
import dotenv from "dotenv";
import router from "./routes/.routes.js";
import { connectDB } from "./config/databse.js";
dotenv.config();

// env file import and use here
const port = process.env.PORT || 8080;

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("src"));

//Router import from routes
app.use(router);

// Database use
connectDB();

// server running
app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});
