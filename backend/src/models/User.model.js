import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			lowercase: true,
			minlength: 4,
			maxlength: 32,
		},

		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			lowercase: true,
		},

		password: {
			type: String,
			required: true,
			minlength: 6,
		},

		profile: {
			type: String,
			default: "",
		},

		role: {
			type: String,
			default: "user",
		},

		isPremium: {
			type: Boolean,
			default: false,
		},

		favorites: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Car",
			},
		],
	},
	{
		timestamps: true,
	}
);

export const User = mongoose.model("User", userSchema);
