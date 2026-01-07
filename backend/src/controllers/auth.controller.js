import bcrypt from "bcrypt";
import { User } from "../models/User.model.js";
import generateToken from "../config/generateToken.js";

// register user
export const registerUserController = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		if (!username || !email || !password) {
			return res.status(400).json({ message: "All fields are required" });
		}

		const existingUser = await User.findOne({ email });

		if (existingUser) {
			return res.status(409).json({ message: "User already exists" });
		}

		// hash password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const user = await User.create({
			username,
			email,
			password: hashedPassword,
		});

		return res.status(201).json({
			message: `User registered successfully!`,
			user: {
				id: user._id,
				username: user.username,
				email: user.email,
			},
		});
	} catch (error) {
		console.error(`Register User Error:`, error);
		res.status(500).json({ message: "Server Error" });
	}
};

// login user
export const loginUserController = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ message: "All fields are required" });
		}

		const user = await User.findOne({ email });

		if (!user) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const isPasswordMatch = await bcrypt.compare(password, user.password);

		if (!isPasswordMatch) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		// generate jwt token
		const token = generateToken(user._id);

		return res.status(200).json({
			message: "Login successful",
			token,
			user: {
				id: user._id,
				username: user.username,
				email: user.email,
				role: user.role,
				isPremium: user.isPremium,
				profile: user.profile,
			},
		});
	} catch (error) {
		console.error(`Login User Error:`, error);
		res.status(500).json({ message: "Server Error" });
	}
};

export const getProfileController = async (req, res) => {
	try {
		res.status(200).json({
			id: req.user._id,
			username: req.user.username,
			email: req.user.email,
			profile: req.user.profile,
			role: req.user.role,
			isPremium: req.user.isPremium,
		});
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};
