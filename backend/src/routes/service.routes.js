import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
	createServiceRequest,
	getAllServiceRequests,
	getMyServiceRequests,
	updateServiceStatus,
} from "../controllers/service.controller.js";
import requireAdmin from "../middlewares/admin.middleware.js";

const router = express.Router();

// request a service
// user
router.post("/request", authMiddleware, createServiceRequest);
router.get("/my-requests", authMiddleware, getMyServiceRequests);

// manage service
// admin
router.get("/", authMiddleware, requireAdmin, getAllServiceRequests);
router.put("/:id/status", authMiddleware, requireAdmin, updateServiceStatus);

export default router;
