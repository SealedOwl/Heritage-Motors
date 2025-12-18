import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";

function AdminHome() {
	const stats = {
		totalUsers: 1420,
		premiumUsers: 1030,
		totalCars: 235,
		approvedCars: 223,
		totalProfits: 928000,
	};
	return (
		<>
			<AdminHeader />
			<div className="bg-gray-900 min-h-screen text-white pt-22 flex">
				<AdminSidebar />
				{/* main content  */}
				<main className="flex-1 p-10 pt-16">
					<h1 className="text-4xl font-semibold text-gold mb-8">
						Admin Dashboard
					</h1>

					{/* statistics */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
						<div className="bg-[#111]/60 border border-[#222] p-6 rounded-xl shadow">
							<p className="text-gray-400">Total Users</p>
							<p className="text-4xl  text-gold mt-2">{stats.totalUsers}</p>
						</div>

						<div className="bg-[#111]/60 border border-[#222] p-6 rounded-xl shadow">
							<p className="text-gray-400">Premium Users</p>
							<p className="text-4xl  text-gold mt-2">{stats.premiumUsers}</p>
						</div>

						<div className="bg-[#111]/60 border border-[#222] p-6 rounded-xl shadow">
							<p className="text-gray-400">Total Cars Listed</p>
							<p className="text-4xl  text-gold mt-2">{stats.totalCars}</p>
						</div>

						<div className="bg-[#111]/60 border border-[#222] p-6 rounded-xl shadow">
							<p className="text-gray-400">Approved Listings</p>
							<p className="text-4xl  text-gold mt-2">{stats.approvedCars}</p>
						</div>

						<div className="bg-[#111]/60 border border-[#222] p-6 rounded-xl shadow">
							<p className="text-gray-400">Total Profits</p>
							<p className="text-4xl  text-gold mt-2">
								${stats.totalProfits.toLocaleString()}
							</p>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}

export default AdminHome;
