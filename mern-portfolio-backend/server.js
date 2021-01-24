const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// set up express

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);

// set up routes
app.use("/portfolio", require("./routes/projectRouter"));
