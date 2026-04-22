const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const quoteRoutes = require("./routes/quoteRoutes");
const authRoutes = require ("./routes/authRoutes");
const chatRoutes = require ("./routes/chatRoutes");
const cookieParser = require("cookie-parser");


dotenv.config();

// connect database
connectDB();

const app = express();

// middleware
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173", // for frontend
  credentials: true
}));

app.use(cookieParser());



// routes
app.use("/api", quoteRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});