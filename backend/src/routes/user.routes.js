import express from "express";
import {
	updateProfile,
	addFavorite,
	removeFavorite,
	getFavorites,
} from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

// edit profile
router.put("/profile", authMiddleware, upload.single("profile"), updateProfile);

// favorite car
router.post("/favorites/:carId", authMiddleware, addFavorite);
router.delete("/favorites/:carId", authMiddleware, removeFavorite);
router.get("/favorites", authMiddleware, getFavorites);

export default router;
