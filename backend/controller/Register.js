const bcrypt = require("bcrypt");
const User = require("../models/user");

const Register = async (req, res) => {
  try {
    const { name, email, username, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "User Already exist" });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const NewUser = new User({
      name,
      email,
      username,
      password: hashedpassword,
    });

    await NewUser.save();

    res.status(200).json({ message: "Registred successfull" });
  } catch (error) {
    res.status(500).json({ message: "Failed" });
  }
};

module.exports = Register;
