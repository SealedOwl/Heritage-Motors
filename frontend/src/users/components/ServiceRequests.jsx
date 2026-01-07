import React, { useEffect, useState } from "react";
import { getMyServiceRequestsAPI } from "../../services/service.api";
import { getMyCarsAPI } from "../../services/car.api";

const ServiceRequests = () => {
	const [services, setServices] = useState([]);
	const [cars, setCars] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const token = localStorage.getItem("token");
		if (!token) {
			setLoading(false);
			return;
		}

		const [serviceRes, carRes] = await Promise.all([
			getMyServiceRequestsAPI(token),
			getMyCarsAPI(token),
		]);

		if (serviceRes.status === "success") {
			setServices(serviceRes.data);
		}

		if (carRes?.data?.status === "success") {
			setCars(carRes?.data?.data);
		}

		setLoading(false);
	};

	if (loading) {
		return <p className="text-gold">Loading...</p>;
	}

	return (
		<div className="space-y-8">
			{/* ===== SERVICE REQUESTS ===== */}
			<div className="bg-gray-900 border border-gold rounded-xl p-6">
				<h3 className="text-xl text-gold mb-4">Service Requests</h3>

				{services.length === 0 ? (
					<p className="text-gray-400">No service requests yet.</p>
				) : (
					<div className="space-y-4">
						{services.map((req) => (
							<div
								key={req._id}
								className="flex justify-between items-center border-b border-gray-700 pb-2"
							>
								<div>
									<p className="font-semibold">{req.serviceType}</p>
									<p className="text-sm text-gray-400">
										{req.carModel} • {req.year}
									</p>
								</div>

								<StatusBadge status={req.status} />
							</div>
						))}
					</div>
				)}
			</div>

			{/* ===== SELL CAR STATUS ===== */}
			<div className="bg-gray-900 border border-gold rounded-xl p-6">
				<h3 className="text-xl text-gold mb-4">My Car Listings</h3>

				{cars.length === 0 ? (
					<p className="text-gray-400">
						You haven’t listed any cars for sale yet.
					</p>
				) : (
					<div className="space-y-4">
						{cars.map((car) => (
							<div
								key={car._id}
								className="flex justify-between items-center border-b border-gray-700 pb-2"
							>
								<div>
									<p className="font-semibold">{car.title}</p>
									<p className="text-sm text-gray-400">
										${car.price.toLocaleString()}
									</p>
								</div>

								<span
									className={`px-3 py-1 rounded text-sm ${
										car.isSold
											? "bg-blue-600"
											: car.isApproved
											? "bg-green-600"
											: "bg-yellow-600"
									}`}
								>
									{car.isSold
										? "Sold"
										: car.isApproved
										? "Approved"
										: "Pending"}
								</span>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

const StatusBadge = ({ status }) => (
	<span
		className={`px-3 py-1 rounded text-sm capitalize ${
			status === "pending"
				? "bg-yellow-600"
				: status === "approved"
				? "bg-green-600"
				: "bg-red-600"
		}`}
	>
		{status}
	</span>
);

export default ServiceRequests;
