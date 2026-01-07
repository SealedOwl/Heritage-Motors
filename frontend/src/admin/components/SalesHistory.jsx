import React, { useEffect, useState } from "react";
import { getSalesHistoryAPI } from "../../services/admin.api";

const SalesHistory = () => {
	const [sales, setSales] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchSales();
	}, []);

	const fetchSales = async () => {
		const token = localStorage.getItem("token");
		const response = await getSalesHistoryAPI(token);

		if (response.status === "success") {
			setSales(response.data);
		}

		setLoading(false);
	};

	if (loading) {
		return <p className="text-gold">Loading sales history...</p>;
	}

	if (sales.length === 0) {
		return <p className="text-gray-400">No sales yet.</p>;
	}

	return (
		<>
			<h2 className="text-2xl text-gold mb-6">Sales History</h2>
			<div className="space-y-4">
				{sales.map((car) => (
					<div
						key={car._id}
						className="bg-[#111]/60 border border-[#222] p-5 rounded-xl"
					>
						<h3 className="text-xl text-gold font-semibold">{car.title}</h3>

						<p className="text-gray-400">
							Collection: {car.collection.join(", ")}
						</p>

						<p className="text-gray-400">
							Seller: {car.seller?.username || "Unknown"}
						</p>

						<p className="text-green-500 font-bold text-lg">
							Sold for ${car.price.toLocaleString()}
						</p>

						<p className="text-sm text-gray-500">
							Sold on: {new Date(car.updatedAt).toLocaleDateString()}
						</p>
					</div>
				))}
			</div>
		</>
	);
};

export default SalesHistory;
