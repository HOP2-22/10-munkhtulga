const User = require("../model/user");
const bcrypt = require("bcrypt");

const register = async (request, response) => {
  const { email, password } = request.body;
  try {
    const user = await User.create({ email, password });
    response.status(200).json({
      message: "successfuly created user",
      data: user.email,
    });
  } catch (error) {
    console.error(error);
  }
};

const ACCESS_TOKEN_KEY = "secret123";

const login = async (request, response) => {
  const { email, password } = request.body;
  const user = await User.findOne({ email: email });
  const match = await bcrypt.compare(password, user.password);
  if (match) {
    const token = jwt.sign(
      {
        user: user.email,
      },
      ACCESS_TOKEN_KEY
    );
    response.status(200).json({
      message: "Failed to login",
    });
  }
};

module.exports = {
  register,
  login,
};
