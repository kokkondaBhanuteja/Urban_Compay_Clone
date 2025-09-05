const authService = require('../services/authService');

const register = async (req, res) => {
    try {
        const { fullName, email, password, phoneNumber } = req.body;
        const user = await authService.registerUser({ fullName, email, password, phoneNumber });
        res.status(201).json({ message: 'User registered successfully', userId: user._id });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { token, user } = await authService.loginUser(email, password);
        res.json({ token, user: { id: user._id, fullName: user.fullName, email: user.email } });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

const googleCallback = async (req, res) => {
    try {
      // The user is authenticated by Passport and is available in req.user
      // You can generate a JWT token here and send it to the client
      const token = await authService.generateToken(req.user);
      // Redirect the user to the frontend with the token
      res.redirect(`http://localhost:3000?token=${token}`);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
module.exports = {
    register,
    login,
    googleCallback
};