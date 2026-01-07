import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGODB_URI) {
	throw new Error("Please provide MONGODB_URI in the .env file");
}

const connectDB = async () => {
	try {
		const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);

		console.log(`
            MongoDB connected: ${connectionInstance.connection.host}`);
	} catch (error) {
		console.error("MongoDB connection failed", error.message);
		process.exit(1);
	}
};

export default connectDB;
