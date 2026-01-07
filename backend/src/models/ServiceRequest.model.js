import mongoose from "mongoose";

const serviceRequestSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},

		serviceType: {
			type: String,
			required: true,
			enum: [
				"Vintage Car Restoration",
				"Authenticity Verification",
				"Custom Modification",
				"Custom Car Sourcing",
			],
		},

		carModel: {
			type: String,
			required: true,
			trim: true,
		},

		year: {
			type: Number,
			required: true,
		},

		description: {
			type: String,
			trim: true,
		},

		status: {
			type: String,
			enum: ["pending", "approved", "rejected"],
			default: "pending",
		},
	},
	{ timestamps: true }
);

export const ServiceRequest = mongoose.model(
	"ServiceRequest",
	serviceRequestSchema
);
