const User = require("../Models/User");

const bcrypt = require("bcrypt");
const cloudinary = require("../config/cloudenary");

const registerUser = async (req, res) => {
   try {
      const { name, email, password, avatar } = req.body;
      if (!email || !name || !password) {
         return res.status(400).json({ message: "all fields are required" });

      }

      const userExists = await User.findOne({ email });

      if (userExists) {
         return res.status(400).json({ message: "user already exists" });

      }
      const encryptespassword = await bcrypt.hash(password, 10);
      const user = new User({ name, email, password: encryptespassword, avatar });
      await user.save();

      return res.status(200).json({ message: "user created" });


   } catch (error) {
      return res.status(500).json({ message: error.message });

   }
};


const loginUser = async (req, res) => {
   try {
      const { email, password } = req.body;
      if (!email || !password) {
         return res.status(400).json({ message: "all fields are required" });

      }
      const user = await User.findOne({ email });

      if (!user) {
         return res.status(400).json({ message: "user not found" });

      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
         return res.status(400).json({ message: "invalid credentials" });

      }

      return res.status(200).json({ message: "login successful", data: user });

   } catch (error) {
      return res.status(500).json({ message: error.message });

   }

};


const updateProfile = async (req, res) => {
   try {
      const { name,email } = req.body;
      const { avatar } = req.files;
      const userdetails = await User.findOne({email : email});
// console.log(avatar[0].buffer);/
      if (!userdetails) {
         return res.status(400).json({ message: "user not found" });

      }
      let avatarUrl;

      if (avatar) {


         const signatureUpload = await cloudinary(avatar[0].buffer);
         // console.log(signatureUpload);
         avatarUrl = signatureUpload.secure_url;


      }
      const updatedUserInfo = await User.findOneAndUpdate(
         { email },
         { name, avatar: avatarUrl },
         { new: true }
      );
      return res.status(200).json({ message: "user updated", data: updatedUserInfo });

   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};




module.exports = { registerUser, loginUser, updateProfile }