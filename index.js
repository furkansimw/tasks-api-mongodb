const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const notExistRoute = require("./routes/notExistRoute");
const error = require("./routes/error");
const taskRoute = require("./routes/taskRoute");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use("/tasks", taskRoute);
app.use(error);
app.use(notExistRoute);

app.listen(PORT, () => {
  mongoose
    .connect(process.env.URI)
    .then(() => console.log("Connected DB"))
    .catch((err) => console.log(err));
  console.log(`Server listening port: ${PORT}`);
});
