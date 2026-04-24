const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const quoteRoutes = require("./routes/quoteRoutes");
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");
const cookieParser = require("cookie-parser");

dotenv.config();

// connect database
connectDB();

const app = express();

// middleware
app.use(helmet());
app.use(cookieParser());
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://myjustsimplewords.vercel.app"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));


// routes
app.use("/api", quoteRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});