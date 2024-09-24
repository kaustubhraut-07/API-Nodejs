const express = require("express");
const dotenv = require("dotenv").config();


const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
})