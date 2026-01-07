import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import carRoutes from "./routes/car.routes.js";
import serviceRoutes from "./routes/service.routes.js";
import adminRoutes from "./routes/admin.routes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

//  users routes
app.use("/api/users", userRoutes);

// car rooutes
app.use("/api/cars", carRoutes);

// image uploads
app.use("/imgUploads", express.static("imgUploads"));

// request services
app.use("/api/services", serviceRoutes);

// admin routes
app.use("/api/admin", adminRoutes);

// services
app.use("/api/services", serviceRoutes);

app.get("/", (req, res) => {
	res.send("API running");
});

const PORT = process.env.PORT || 8000;

const startServer = async () => {
	try {
		await connectDB();

		app.listen(PORT, () => {
			console.log(`Server is running at port: ${PORT}`);
		});
	} catch (error) {
		console.error("Failed to start server:", error);
		process.exit(1);
	}
};

startServer();
