import React, { useState } from "react";
import { sellCarAPI } from "../../services/car.api";

const SellCar = () => {
	const [loading, setLoading] = useState(false);
	const [image, setImage] = useState(null);

	const [formData, setFormData] = useState({
		title: "",
		price: "",
		year: "",
		color: "",
		engine: "",
		transmission: "",
		fuelType: "",
		driveType: "",
		condition: "",
		distance: "",
		description: "",
		collection: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleImageChange = (e) => {
		setImage(e.target.files[0]); // ✅ SINGLE IMAGE
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const token = localStorage.getItem("token");
		if (!token) {
			alert("Please login to sell a car");
			setLoading(false);
			return;
		}

		if (!image) {
			alert("Please upload an image");
			setLoading(false);
			return;
		}

		const data = new FormData();

		// text fields
		data.append("title", formData.title);
		data.append("price", formData.price);
		data.append("year", formData.year);
		data.append("color", formData.color);
		data.append("engine", formData.engine);
		data.append("transmission", formData.transmission);
		data.append("fuelType", formData.fuelType);
		data.append("driveType", formData.driveType);
		data.append("condition", formData.condition);
		data.append("description", formData.description);

		// distance (JSON string)
		data.append("distance", formData.distance);

		// collections (comma separated)
		data.append("collection", formData.collection);

		// image
		data.append("images", image);

		const response = await sellCarAPI(data, token);

		if (response.status === "success") {
			alert("Car submitted successfully! Awaiting admin approval.");

			setFormData({
				title: "",
				price: "",
				year: "",
				color: "",
				engine: "",
				transmission: "",
				fuelType: "",
				driveType: "",
				condition: "",
				distance: "",
				description: "",
				collection: "",
			});
			setImage(null);
		} else {
			alert(response.message || "Failed to submit car");
		}

		setLoading(false);
	};

	return (
		<div className="bg-gray-900 border border-gold rounded-xl p-6">
			<h3 className="text-xl text-gold mb-6">Sell Your Car</h3>

			<form
				onSubmit={handleSubmit}
				className="grid grid-cols-1 md:grid-cols-2 gap-4"
			>
				{[
					{ name: "title", label: "Car Title" },
					{ name: "price", label: "Price", type: "number" },
					{ name: "year", label: "Year", type: "number" },
					{ name: "color", label: "Color" },
					{ name: "engine", label: "Engine" },
					{ name: "transmission", label: "Transmission" },
					{ name: "fuelType", label: "Fuel Type" },
					{ name: "driveType", label: "Drive Type" },
					{ name: "condition", label: "Condition" },
					{
						name: "distance",
						label: "Distance Travelled (km)",
						type: "number",
					},
				].map((field) => (
					<input
						key={field.name}
						name={field.name}
						type={field.type || "text"}
						placeholder={field.label}
						value={formData[field.name]}
						onChange={handleChange}
						required
						className="bg-white text-black p-2 rounded"
					/>
				))}

				<input
					name="collection"
					placeholder="Collections (comma separated)"
					value={formData.collection}
					onChange={handleChange}
					className="bg-white text-black p-2 rounded md:col-span-2"
				/>

				<input
					type="file"
					accept="image/*"
					required
					onChange={handleImageChange}
					className="bg-white text-black p-2 rounded md:col-span-2"
				/>

				<textarea
					name="description"
					placeholder="Car Description"
					value={formData.description}
					onChange={handleChange}
					required
					rows={4}
					className="bg-white text-black p-2 rounded md:col-span-2"
				/>

				<button
					type="submit"
					disabled={loading}
					className="md:col-span-2 border border-gold text-gold py-2 rounded hover:bg-gold hover:text-black transition disabled:opacity-50"
				>
					{loading ? "Submitting..." : "Submit for Approval"}
				</button>
			</form>
		</div>
	);
};

export default SellCar;
