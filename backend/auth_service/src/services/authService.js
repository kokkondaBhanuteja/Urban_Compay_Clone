const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const registerUser = async (userData) => {
    const user = new User(userData);
    await user.save();
    return user;
};

const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid email or password');
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, user };
};

module.exports = {
    registerUser,
    loginUser,
};