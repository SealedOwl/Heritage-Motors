import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import commonAPI from "../../services/commonAPI";
import SERVER_URL from "../../services/serverURL";
import { Link } from "react-router-dom";

const RequestService = ({ close }) => {
	const { user } = useContext(AuthContext);

	const [formData, setFormData] = useState({
		serviceType: "",
		carModel: "",
		year: "",
		description: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			alert("Please login first");
			return;
		}

		// 🔒 Premium check (frontend UX)
		if (formData.serviceType === "Custom Car Sourcing" && !user.isPremium) {
			alert("This service is for premium users only");
			return;
		}

		const token = localStorage.getItem("token");

		const response = await commonAPI(
			"post",
			`${SERVER_URL}/api/services/request`,
			formData,
			{
				Authorization: `Bearer ${token}`,
			}
		);

		if (response.status === "success") {
			alert("Service request submitted!");
			close();
		} else {
			alert(response.message);
		}
	};

	return (
		<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
			<div className="bg-gray-900 border border-gold rounded-xl p-6 w-full max-w-lg">
				<h2 className="text-2xl text-gold mb-4 text-center">Request Service</h2>

				<form onSubmit={handleSubmit} className="space-y-4">
					<select
						name="serviceType"
						required
						value={formData.serviceType}
						onChange={handleChange}
						className="w-full p-2 rounded bg-white border border-gray-600"
					>
						<option value="">Select Service</option>

						<option value="Vintage Car Restoration">
							Vintage Car Restoration
						</option>

						<option value="Authenticity Verification">
							Authenticity Verification
						</option>

						<option value="Custom Modification">Custom Modification</option>

						<option value="Custom Car Sourcing" disabled={!user?.isPremium}>
							Custom Car Sourcing (Premium)
						</option>
					</select>

					<input
						type="text"
						name="carModel"
						placeholder="Car Model (e.g. 1965 Mustang)"
						required
						value={formData.carModel}
						onChange={handleChange}
						className="w-full p-2 rounded bg-white border border-gray-600"
					/>

					<input
						type="number"
						name="year"
						placeholder="Manufacturing Year"
						required
						value={formData.year}
						onChange={handleChange}
						className="w-full p-2 rounded bg-white border border-gray-600"
					/>

					<textarea
						name="description"
						placeholder="Describe your requirement"
						value={formData.description}
						onChange={handleChange}
						rows="4"
						className="w-full p-2 rounded bg-white border border-gray-600"
					/>

					{!user?.isPremium && (
						<Link to="/buy-premium">
							<p className="text-gold text-sm underline cursor-pointer">
								Upgrade to Premium to unlock exclusive services
							</p>
						</Link>
					)}

					<div className="flex justify-end gap-3 pt-4">
						<button
							type="button"
							onClick={close}
							className="px-4 py-2 border border-gray-500 rounded text-gold cursor-pointer"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 border border-gold rounded hover:bg-gold hover:text-black transition text-gold cursor-pointer"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RequestService;
