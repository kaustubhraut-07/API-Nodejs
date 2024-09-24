const router = require("express").Router();
const multer = require('multer');

const { registerUser, loginUser, updateProfile } = require("../Controller/User.controller");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post('/updateuser',upload.fields([
    { name: 'avatar', maxCount: 1 }
    
]), updateProfile );

module.exports = router;
