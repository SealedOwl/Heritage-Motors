import { ServiceRequest } from "../models/ServiceRequest.model.js";

// create service req
export const createServiceRequest = async (req, res) => {
	try {
		const { serviceType, carModel, year, description } = req.body;

		//  Premium check
		if (serviceType === "Custom Car Sourcing" && !req.user.isPremium) {
			return res.status(403).json({
				message: "Premium membership required for this service",
			});
		}

		const service = await ServiceRequest.create({
			user: req.user._id,
			serviceType,
			carModel,
			year,
			description,
		});

		res.status(201).json({
			message: "Service request submitted successfully",
			service,
		});
	} catch (error) {
		res.status(500).json({
			message: "Failed to submit service request",
		});
	}
};

// get user services
export const getMyServiceRequests = async (req, res) => {
	try {
		const requests = await ServiceRequest.find({ user: req.user._id }).sort({
			createdAt: -1,
		});

		res.status(200).json(requests);
	} catch (error) {
		res.status(500).json({ message: "Failed to fetch service requests" });
	}
};

// ADMIN → get all service requests
export const getAllServiceRequests = async (req, res) => {
	try {
		const requests = await ServiceRequest.find()
			.populate("user", "username email")
			.sort({ createdAt: -1 });

		res.status(200).json(requests);
	} catch (error) {
		res.status(500).json({ message: "Failed to fetch requests" });
	}
};

// ADMIN → update service status
export const updateServiceStatus = async (req, res) => {
	try {
		const { status } = req.body;

		const updated = await ServiceRequest.findByIdAndUpdate(
			req.params.id,
			{ status },
			{ new: true }
		);

		res.status(200).json(updated);
	} catch (error) {
		res.status(500).json({ message: "Failed to update status" });
	}
};
