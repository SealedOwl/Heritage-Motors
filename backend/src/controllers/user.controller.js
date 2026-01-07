import { User } from "../models/User.model.js";

export const updateProfile = async (req, res) => {
	try {
		const user = await User.findById(req.user._id);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Update username
		if (req.body.username) {
			user.username = req.body.username;
		}

		// Update profile image
		if (req.file) {
			user.profile = `/imgUploads/${req.file.filename}`;
		}

		await user.save();

		res.status(200).json({
			message: "Profile updated successfully",
			user: {
				id: user._id,
				username: user.username,
				email: user.email,
				profile: user.profile,
				isPremium: user.isPremium,
				role: user.role,
			},
		});
	} catch (error) {
		console.error("Edit profile error:", error);
		res.status(500).json({ message: "Server error" });
	}
};

// ADD FAVORITE
export const addFavorite = async (req, res) => {
	try {
		const user = req.user;
		const { carId } = req.params;

		if (user.favorites.includes(carId)) {
			return res.status(400).json({ message: "Already in favorites" });
		}

		user.favorites.push(carId);
		await user.save();

		res.status(200).json({ message: "Added to favorites" });
	} catch (error) {
		res.status(500).json({ message: "Failed to add favorite" });
	}
};

// REMOVE FAVORITE
export const removeFavorite = async (req, res) => {
	try {
		const user = req.user;
		const { carId } = req.params;

		user.favorites = user.favorites.filter((id) => id.toString() !== carId);

		await user.save();

		res.status(200).json({ message: "Removed from favorites" });
	} catch (error) {
		res.status(500).json({ message: "Failed to remove favorite" });
	}
};

// GET FAVORITES
export const getFavorites = async (req, res) => {
	try {
		const user = await User.findById(req.user._id).populate("favorites");

		res.status(200).json(user.favorites);
	} catch (error) {
		res.status(500).json({ message: "Failed to fetch favorites" });
	}
};
