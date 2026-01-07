import express from "express";
import {
	createCarController,
	getAllCars,
	getCarById,
	getCarsByCollection,
	getMyCarsController,
} from "../controllers/car.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

// all cars
router.get("/", getAllCars);

// cars by collection
router.get("/collection/:name", getCarsByCollection);

// user -> Sell car
router.post("/", authMiddleware, upload.single("images"), createCarController);

// get user uploaded car
router.get("/my-cars", authMiddleware, getMyCarsController);

// car by id
router.get("/:id", getCarById);

export default router;
