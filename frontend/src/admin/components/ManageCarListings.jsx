import React, { useEffect, useState } from "react";
import {
	getPendingCarsAPI,
	approveCarAPI,
	rejectCarAPI,
} from "../../services/admin.api";

const ManageCarListings = () => {
	const [cars, setCars] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchPendingCars();
	}, []);

	const fetchPendingCars = async () => {
		const token = localStorage.getItem("token");
		const res = await getPendingCarsAPI(token);

		// ✅ FIX: access the array correctly
		if (res?.status === "success") {
			setCars(res.data.data);
		} else {
			setCars([]);
		}

		setLoading(false);
	};

	const handleApprove = async (id) => {
		const token = localStorage.getItem("token");
		await approveCarAPI(id, token);
		fetchPendingCars();
	};

	const handleReject = async (id) => {
		const token = localStorage.getItem("token");
		if (!window.confirm("Reject this car listing?")) return;
		await rejectCarAPI(id, token);
		fetchPendingCars();
	};

	if (loading) {
		return <p className="text-gold">Loading pending car listings...</p>;
	}

	return (
		<>
			<h2 className="text-2xl text-gold mb-6">User Sell Requests</h2>

			{cars.length === 0 ? (
				<p className="text-gray-400">No pending car listings.</p>
			) : (
				<div className="space-y-5">
					{cars.map((car) => (
						<div
							key={car._id}
							className="bg-[#111]/60 border border-[#222] p-6 rounded-xl"
						>
							<div className="flex justify-between items-start">
								<div>
									<h3 className="text-lg text-gold font-semibold">
										{car.title}
									</h3>
									<p className="text-gray-400">
										${car.price.toLocaleString()} • {car.year}
									</p>
									<p className="text-sm text-gray-400 mt-1">
										Seller: {car.seller.username} ({car.seller.email})
									</p>
								</div>

								<span className="px-3 py-1 rounded text-sm bg-yellow-600">
									Pending
								</span>
							</div>

							<div className="flex gap-4 mt-5">
								<button
									onClick={() => handleApprove(car._id)}
									className="border border-green-600 px-4 py-1 rounded hover:bg-green-600 hover:text-black transition cursor-pointer"
								>
									Approve
								</button>

								<button
									onClick={() => handleReject(car._id)}
									className="border border-red-600 px-4 py-1 rounded hover:bg-red-600 hover:text-black transition cursor-pointer"
								>
									Reject
								</button>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default ManageCarListings;
