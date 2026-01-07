import React, { useEffect, useState } from "react";
import {
	getAllServiceRequestsAPI,
	updateServiceStatusAPI,
} from "../../services/service.api";

const AdminServiceRequests = () => {
	const [requests, setRequests] = useState([]);

	useEffect(() => {
		fetchRequests();
	}, []);

	const fetchRequests = async () => {
		const token = localStorage.getItem("token");
		const res = await getAllServiceRequestsAPI(token);

		if (res.status === "success") {
			setRequests(res.data);
		}
	};

	const updateStatus = async (id, status) => {
		const token = localStorage.getItem("token");
		await updateServiceStatusAPI(id, status, token);
		fetchRequests();
	};

	return (
		<>
			<h2 className="text-2xl text-gold mb-6">Manage Service Requests</h2>

			<div className="space-y-6">
				{requests.map((req) => (
					<div
						key={req._id}
						className="bg-[#111]/60 border border-[#222] p-6 rounded-xl"
					>
						<h3 className="text-gold text-lg font-semibold mb-2">
							{req.serviceType}
						</h3>

						<p className="text-gray-400">
							User: {req.user.username} ({req.user.email})
						</p>

						<p className="text-gray-400">
							Car: {req.carModel} ({req.year})
						</p>

						<p className="text-gray-300 mt-2">{req.description}</p>

						<div className="mt-4">
							<span
								className={`inline-block px-3 py-1 rounded text-sm capitalize ${
									req.status === "pending"
										? "bg-yellow-600"
										: req.status === "approved"
										? "bg-green-600"
										: "bg-red-600"
								}`}
							>
								{req.status}
							</span>
						</div>

						{req.status === "pending" && (
							<div className="flex gap-4 mt-4">
								<button
									onClick={() => updateStatus(req._id, "approved")}
									className="border border-green-600 text-green-600 px-4 py-1 rounded hover:bg-green-600 hover:text-black transition cursor-pointer"
								>
									Approve
								</button>

								<button
									onClick={() => updateStatus(req._id, "rejected")}
									className="border border-red-600 text-red-600 px-4 py-1 rounded hover:bg-red-600 hover:text-black transition cursor-pointer"
								>
									Reject
								</button>
							</div>
						)}
					</div>
				))}
			</div>
		</>
	);
};

export default AdminServiceRequests;
