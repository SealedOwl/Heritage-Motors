import { Car } from "../models/Car.model.js";

// GET all approved cars
export const getAllCars = async (req, res) => {
	try {
		const cars = await Car.find({ isApproved: true });
		res.status(200).json(cars);
	} catch (error) {
		res.status(500).json({ message: "Failed to fetch cars" });
	}
};

// GET car by ID
export const getCarById = async (req, res) => {
	try {
		const car = await Car.findById(req.params.id);

		if (!car) {
			return res.status(404).json({ message: "Car not found" });
		}

		res.status(200).json(car);
	} catch (error) {
		res.status(500).json({ message: "Failed to fetch car" });
	}
};

// GET cars by collection
export const getCarsByCollection = async (req, res) => {
	try {
		const cars = await Car.find({
			collection: req.params.name,
			isApproved: true,
		});

		res.status(200).json(cars);
	} catch (error) {
		res.status(500).json({ message: "Failed to fetch collection" });
	}
};

// USER → Sell Car
export const createCarController = async (req, res) => {
	try {
		const {
			title,
			price,
			year,
			color,
			engine,
			transmission,
			fuelType,
			driveType,
			condition,
			description,
			collection,
			distance, // 👈 flat field
		} = req.body;

		// ✅ image required
		if (!req.file) {
			return res.status(400).json({ message: "Car image is required" });
		}

		const car = await Car.create({
			title,
			price: Number(price),
			year: Number(year),
			color,
			engine,
			transmission,
			fuelType,
			driveType,
			condition,
			description,

			images: [`/imgUploads/${req.file.filename}`],

			// ✅ MANUAL nested object creation
			distanceTravelled: {
				value: Number(distance),
				unit: "km",
			},

			// ✅ optional collections
			collection: collection ? collection.split(",").map((c) => c.trim()) : [],

			seller: req.user._id,
			isApproved: false,
			isSold: false,
		});

		res.status(201).json({
			status: "success",
			message: "Car submitted successfully. Awaiting admin approval.",
			car,
		});
	} catch (error) {
		console.error("Create car error:", error);
		res.status(500).json({ message: "Failed to submit car" });
	}
};

// USER → Get my uploaded cars
export const getMyCarsController = async (req, res) => {
	try {
		console.log("USER IN MY CARS:", req.user);

		const cars = await Car.find({ seller: req.user._id })
			.select("title price isApproved isSold createdAt")
			.sort({ createdAt: -1 });

		res.status(200).json({
			status: "success",
			data: cars,
		});
	} catch (error) {
		console.error("Get my cars error:", error);
		res.status(500).json({ message: "Failed to fetch your cars" });
	}
};
