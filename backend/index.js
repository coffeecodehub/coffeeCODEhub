require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./db");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/contact", require("./routes/contactRoutes"));

app.use("/api/reviews", require("./routes/reviewRoutes"));

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});