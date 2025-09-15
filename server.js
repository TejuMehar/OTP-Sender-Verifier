const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const otpRoutes = require("./routes/otpRoutes");

const app = express();
app.use(bodyParser.json());

connectDB(); 

app.use("/api", otpRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
