import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from "../../context/AuthContext";
import SERVER_URL from "../../services/serverURL";

function AdminSidebar({ setActiveSection }) {
	const [mobileSidebar, setMobileSidebar] = useState(false);
	const { user } = useContext(AuthContext);

	const profileImage = user?.profile
		? `${SERVER_URL}${user.profile}`
		: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

	return (
		<>
			{/* mobile toggle bar */}
			<div className="md:hidden fixed top-20 left-0 w-full bg-charcoal p-4 flex justify-between z-20">
				<button
					onClick={() => setMobileSidebar(true)}
					className="text-gold text-xl"
				>
					<GiHamburgerMenu />
				</button>
			</div>

			{/* mobile sidebar  */}
			<div
				className={`fixed top-0 left-0 h-full w-64 bg-gray border border-gray p-6 transform transition-transform duration-300 z-30
				${mobileSidebar ? "translate-x-0" : "-translate-x-full"}`}
			>
				<div className="flex justify-between mb-10">
					<h2 className="text-3xl font-semibold text-gold">Admin</h2>
					<button
						onClick={() => setMobileSidebar(false)}
						className="px-3 py-1 border border-gold text-gold rounded"
					>
						X
					</button>
				</div>

				{/* profile  */}
				<div className="flex flex-col gap-3 mb-8">
					<img
						src={profileImage}
						alt="admin"
						className="w-16 h-16 rounded-full object-cover"
					/>
					<p className="text-xl font-playfair font-semibold text-gold">
						{user?.username || "Admin"}
					</p>
				</div>

				<AdminLinks
					setActiveSection={setActiveSection}
					close={() => setMobileSidebar(false)}
				/>
			</div>

			{/* overlay */}
			{mobileSidebar && (
				<div
					onClick={() => setMobileSidebar(false)}
					className="fixed inset-0 bg-black/50 z-20 md:hidden"
				/>
			)}

			{/* desktop sidebar  */}
			<aside className="w-64 bg-gray border border-gray p-6 hidden md:block">
				<h2 className="text-3xl font-semibold text-gold mb-10">Admin</h2>

				<div className="flex flex-col gap-3 mb-8">
					<img
						src={profileImage}
						alt="admin"
						className="w-16 h-16 rounded-full object-cover"
					/>
					<p className="text-xl font-playfair font-semibold text-gold">
						{user?.username || "Admin"}
					</p>
				</div>

				<AdminLinks setActiveSection={setActiveSection} />
			</aside>
		</>
	);
}

const AdminLinks = ({ setActiveSection, close }) => (
	<nav className="space-y-4 text-gray-300">
		<button
			onClick={() => {
				setActiveSection("dashboard");
				close?.();
			}}
			className="block w-full text-left hover:text-gold transition cursor-pointer"
		>
			Dashboard
		</button>

		<button
			onClick={() => {
				setActiveSection("users");
				close?.();
			}}
			className="block w-full text-left hover:text-gold transition cursor-pointer"
		>
			Manage Users
		</button>

		<button
			onClick={() => setActiveSection("listings")}
			className="block hover:text-gold cursor-pointer"
		>
			Manage Car Listings
		</button>

		<button
			onClick={() => setActiveSection("services")}
			className="block hover:text-gold cursor-pointer"
		>
			Service Requests
		</button>

		<button
			onClick={() => setActiveSection("sales")}
			className="block text-left hover:text-gold cursor-pointer"
		>
			Sales History
		</button>

		<button className="block w-full text-left hover:text-gold transition cursor-pointer">
			Admin Settings
		</button>
	</nav>
);

export default AdminSidebar;
