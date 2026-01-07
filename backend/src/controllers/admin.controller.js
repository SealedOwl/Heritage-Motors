import { User } from "../models/User.model.js";
import { Car } from "../models/Car.model.js";

export const getDashboardStats = async (req, res) => {
	try {
		const totalUsers = await User.countDocuments();
		const premiumUsers = await User.countDocuments({ isPremium: true });

		const totalCars = await Car.countDocuments();
		const approvedCars = await Car.countDocuments({ isApproved: true });

		// Sum of sold cars price
		const soldCars = await Car.find({ isSold: true });
		const totalProfits = soldCars.reduce(
			(sum, car) => sum + (car.price || 0),
			0
		);

		res.status(200).json({
			totalUsers,
			premiumUsers,
			totalCars,
			approvedCars,
			totalProfits,
		});
	} catch (error) {
		console.error("Admin stats error:", error);
		res.status(500).json({ message: "Failed to fetch dashboard stats" });
	}
};

// get all users
export const getAllUsersController = async (req, res) => {
	try {
		const users = await User.find({ role: { $ne: "admin" } }).select(
			"-password"
		);

		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: "Failed to fetch users" });
	}
};
// delete users
export const deleteUserController = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: "User deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: "Failed to delete user" });
	}
};

// get sales history
export const getSalesHistoryController = async (req, res) => {
	try {
		const soldCars = await Car.find({ isSold: true })
			.populate("seller", "username email")
			.sort({ updatedAt: -1 });

		res.status(200).json(soldCars);
	} catch (error) {
		console.error("Sales history error:", error);
		res.status(500).json({ message: "Failed to fetch sales history" });
	}
};

// admin -> get pending car listings (user sell requests)
export const getPendingCarListingsController = async (req, res) => {
	try {
		const cars = await Car.find({ isApproved: false })
			.populate("seller", "username email")
			.sort({ createdAt: -1 });

		res.status(200).json({
			status: "success",
			data: cars,
		});
	} catch (error) {
		console.error("Get pending cars error:", error);
		res.status(500).json({
			message: "Failed to fetch pending car listings",
		});
	}
};

// admin -> approve car
export const approveCarController = async (req, res) => {
	try {
		await Car.findByIdAndUpdate(req.params.id, {
			isApproved: true,
		});

		res.status(200).json({
			status: "success",
			message: "Car approved successfully",
		});
	} catch (error) {
		res.status(500).json({
			message: "Failed to approve car",
		});
	}
};

// admin -> reject car (remove listing)
export const rejectCarController = async (req, res) => {
	try {
		await Car.findByIdAndDelete(req.params.id);

		res.status(200).json({
			status: "success",
			message: "Car rejected and removed",
		});
	} catch (error) {
		res.status(500).json({
			message: "Failed to reject car",
		});
	}
};
