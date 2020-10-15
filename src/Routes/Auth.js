const express = require("express");
const authRouter = express.Router();
const authController = require("../Controller/Auth");

authRouter.post("/sign-up", authController.register);

authRouter.post("/login",authController.login);

module.exports = authRouter;
