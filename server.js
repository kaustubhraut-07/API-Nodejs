const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");


const app = express();
app.use(express.json());
dbConnect();

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
})