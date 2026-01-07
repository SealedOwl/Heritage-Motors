import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},

		price: {
			type: Number,
			required: true,
		},

		year: {
			type: Number,
			required: true,
		},

		color: {
			type: String,
			required: true,
		},

		images: [
			{
				type: String,
				required: true,
			},
		],

		description: {
			type: String,
			required: true,
		},

		// Specifications
		engine: {
			type: String,
			required: true,
		},

		transmission: {
			type: String,
			required: true,
		},

		fuelType: {
			type: String,
			required: true,
		},

		driveType: {
			type: String,
			required: true,
		},

		condition: {
			type: String,
			required: true,
		},

		distanceTravelled: {
			value: {
				type: Number,
				required: true,
			},
			unit: {
				type: String,
				default: "km",
			},
		},

		collection: [
			{
				type: String,
				trim: true,
				index: true,
			},
		],

		isSold: {
			type: Boolean,
			default: false,
		},

		isApproved: {
			type: Boolean,
			default: false,
		},

		seller: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export const Car = mongoose.model("Car", carSchema);
