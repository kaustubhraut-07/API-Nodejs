const router = require("express").Router();

const { registerUser } = require("../Controller/User.controller");

router.post("/register", registerUser);

module.exports = router;
