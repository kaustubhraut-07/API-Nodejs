const User = require("../Models/User");


const registerUser = async (req, res) => {
    try {
        const { name, email, password, avatar } = req.body;
        if (!email || !name || !password) {
            res.status(400).json({ message: "all fields are required" });

        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            res.status(400).json({ message: "user already exists" });

        }

        const user = new User({ name, email, password, avatar });
        await user.save();

        res.status(200).json({ message: "user created" });


    } catch (error) {
        res.status(500).json({ message: error.message });

    }
};


module.exports = { registerUser }