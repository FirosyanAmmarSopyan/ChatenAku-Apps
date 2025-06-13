const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const cors = require("cors");
const { notFound, errorHandler } = require("./middleware/errorHandler");
dotenv.config();
connectDB();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`I love you ${port}`);
});