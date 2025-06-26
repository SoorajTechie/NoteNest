const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const Login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const passMatch = await bcrypt.compare(password, user.password);

        if (!passMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // Set to true if using HTTPS
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ message: "Login successful" });

    } catch (error) {
        res.status(500).json({ message: "Login failed", error: error.message });
    }
};

module.exports = Login;
