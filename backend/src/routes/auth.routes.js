import express from "express";
import {
	getProfileController,
	loginUserController,
	registerUserController,
} from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// register user
router.post("/register", registerUserController);

// login user
router.post("/login", loginUserController);

// user profile
router.get("/profile", authMiddleware, getProfileController);

export default router;
