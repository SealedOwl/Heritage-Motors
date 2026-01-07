import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { getAdminStatsAPI } from "../../services/admin.api";

// admin sections
import ManageUsers from "../components/ManageUsers";
import SalesHistory from "../components/SalesHistory";
import AdminServiceRequests from "../components/AdminServiceRequests";
import ManageCarListings from "../components/ManageCarListings";
import AdminSettings from "./AdminSettings";

function AdminHome() {
	const [stats, setStats] = useState(null);
	const [loading, setLoading] = useState(true);
	const [activeSection, setActiveSection] = useState("dashboard");

	useEffect(() => {
		fetchStats();
	}, []);

	const fetchStats = async () => {
		const token = localStorage.getItem("token");
		const response = await getAdminStatsAPI(token);

		if (response.status === "success") {
			setStats(response.data);
		}

		setLoading(false);
	};

	if (loading) {
		return (
			<div className="bg-gray-900 min-h-screen text-gold flex items-center justify-center">
				Loading dashboard...
			</div>
		);
	}

	return (
		<>
			<AdminHeader />

			<div className="bg-gray-900 min-h-screen text-white flex">
				<AdminSidebar setActiveSection={setActiveSection} />

				<main className="flex-1 p-10 pt-32">
					{/* Dashboard */}
					{activeSection === "dashboard" && (
						<>
							<h1 className="text-4xl font-semibold text-gold mb-8">
								Admin Dashboard
							</h1>

							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
								<StatCard label="Total Users" value={stats.totalUsers} />
								<StatCard label="Premium Users" value={stats.premiumUsers} />
								<StatCard label="Total Cars Listed" value={stats.totalCars} />
								<StatCard
									label="Approved Listings"
									value={stats.approvedCars}
								/>
								<StatCard
									label="Total Profits"
									value={`$${stats.totalProfits.toLocaleString()}`}
								/>
							</div>
						</>
					)}

					{/* manage users  */}
					{activeSection === "users" && <ManageUsers />}

					{/* sales history  */}
					{activeSection === "sales" && <SalesHistory />}

					{/* manage servcie reqs */}
					{activeSection === "services" && <AdminServiceRequests />}

					{/* manage car listings  */}
					{activeSection === "listings" && <ManageCarListings />}

					{/* update admin profile  */}
					{activeSection === "settings" && <AdminSettings />}
				</main>
			</div>
		</>
	);
}

const StatCard = ({ label, value }) => (
	<div className="bg-[#111]/60 border border-[#222] p-6 rounded-xl shadow">
		<p className="text-gray-400">{label}</p>
		<p className="text-4xl text-gold mt-2">{value}</p>
	</div>
);

export default AdminHome;
