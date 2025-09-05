const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  authController.googleCallback
);

module.exports = router;
