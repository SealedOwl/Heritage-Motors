import express from "express";
import {
	approveCarController,
	deleteUserController,
	getAllUsersController,
	getDashboardStats,
	getPendingCarListingsController,
	getSalesHistoryController,
	rejectCarController,
	updateAdminProfileController,
} from "../controllers/admin.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import adminMiddleware from "../middlewares/admin.middleware.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

router.get(
	"/dashboard-stats",
	authMiddleware,
	adminMiddleware,
	getDashboardStats
);

// get users
router.get("/users", authMiddleware, adminMiddleware, getAllUsersController);

// delete user
router.delete(
	"/users/:id",
	authMiddleware,
	adminMiddleware,
	deleteUserController
);

// get sales history
router.get(
	"/sales-history",
	authMiddleware,
	adminMiddleware,
	getSalesHistoryController
);

// admin  -> manage user selling cars
router.get(
	"/pending-cars",
	authMiddleware,
	adminMiddleware,
	getPendingCarListingsController
);

router.put(
	"/pending-cars/:id/approve",
	authMiddleware,
	adminMiddleware,
	approveCarController
);

router.delete(
	"/pending-cars/:id/reject",
	authMiddleware,
	adminMiddleware,
	rejectCarController
);

// update admin profile
router.put(
	"/profile",
	authMiddleware,
	adminMiddleware,
	upload.single("profile"),
	updateAdminProfileController
);

export default router;
