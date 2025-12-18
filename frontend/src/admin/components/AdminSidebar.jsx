import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function AdminSidebar() {
	const [mobileSidebar, setMobileSideBar] = useState(false);

	return (
		<>
			{/* mobile sidebar icon  */}
			<div className="md:hidden fixed top-23 left-0 w-full bg-charcoal  p-4 flex items-center justify-between z-20">
				<button
					onClick={() => setMobileSideBar(true)}
					className="text-gold text-xl font-bold"
				>
					<GiHamburgerMenu />
				</button>
			</div>

			{/* mobile sidebar slide  */}
			<div
				className={`fixed top-0 left-0 h-full w-64 bg-gray border border-gray p-6 transform transition-transform duration-300 z-30 
        ${mobileSidebar ? "translate-x-0" : "-translate-x-full"}`}
			>
				<div className="flex items-center justify-between mb-10">
					<h2 className="text-3xl font-semibold text-gold ">Admin</h2>
					<button
						className="px-3 py-1 border border-gold text-gold rounded "
						onClick={() => {
							setMobileSideBar((prev) => !prev);
						}}
					>
						X
					</button>
				</div>

				<nav className="space-y-4 text-gray-300">
					<div className=" flex flex-col gap-3  justify-center mb-8">
						<img
							src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
							alt="admin profile"
							className="w-15 h-15 rounded-full object-cover "
						/>
						<p className="font-playfair text-xl font-semibold text-gold">
							John Doe
						</p>
					</div>

					<Link to={"/admin"} className="block hover:text-gold transition">
						Dashboard
					</Link>

					<Link
						to={"/admin/manage-users"}
						className="block hover:text-gold transition"
					>
						Manage Users
					</Link>

					<Link
						to={"/admin/manage-listings"}
						className="block hover:text-gold transition"
					>
						Manage Listings
					</Link>

					<Link
						to={"/admin/service-requests"}
						className="block hover:text-gold transition"
					>
						Service Requests
					</Link>

					<Link
						to={"/admin/sales-history"}
						className="block hover:text-gold transition"
					>
						Sales History
					</Link>

					<Link
						to={"/admin/settings"}
						className="block hover:text-gold transition"
					>
						Admin Settings
					</Link>
				</nav>
			</div>

			{/* dark overlay  */}
			{mobileSidebar && (
				<div
					onClick={() => setMobileSideBar(false)}
					className="fixed inset-0 bg-black/50 z-20 md:hidden"
				></div>
			)}

			{/* desktop sidebar  */}
			<aside className="w-64 relative left-0 min-h-full bg-gray border border-gray p-6 hidden md:block">
				<h2 className="text-3xl font-semibold text-gold mb-10">Admin</h2>

				<div className=" flex flex-col gap-3  justify-center mb-8">
					<img
						src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
						alt="admin profile"
						className="w-15 h-15 rounded-full object-cover "
					/>
					<p className="font-playfair text-xl font-semibold text-gold">
						John Doe
					</p>
				</div>

				<nav className="space-y-4 text-gray-300">
					<Link to={"/admin"} className="block hover:text-gold transition">
						Dashboard
					</Link>

					<Link
						to={"/admin/manage-users"}
						className="block hover:text-gold transition"
					>
						Manage Users
					</Link>

					<Link
						to={"/admin/manage-listings"}
						className="block hover:text-gold transition"
					>
						Manage Listings
					</Link>

					<Link
						to={"/admin/service-requests"}
						className="block hover:text-gold transition"
					>
						Service Requests
					</Link>

					<Link
						to={"/admin/sales-history"}
						className="block hover:text-gold transition"
					>
						Sales History
					</Link>

					<Link
						to={"/admin/settings"}
						className="block hover:text-gold transition"
					>
						Admin Settings
					</Link>
				</nav>
			</aside>
		</>
	);
}

export default AdminSidebar;
