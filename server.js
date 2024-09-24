const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");

dbConnect();
const app = express();
app.use(express.json());

app.use("/api/user", require("./Routes/user.route"));



app.get("/", (req, res) => {
    res.send("hello world")
});

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
});