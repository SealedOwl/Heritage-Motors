import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import EditProfile from "../components/EditProfile";
import SellCar from "../components/SellCar";
import ServiceRequests from "../components/ServiceRequests";
import FavoriteCars from "../components/FavoriteCars";
import Navbar from "../../common/components/Navbar";
import SERVER_URL from "../../services/serverURL";

const UserProfile = () => {
	const { user } = useContext(AuthContext);
	const [activeSection, setActiveSection] = useState("sell");
	const [editOpen, setEditOpen] = useState(false);

	const profileImage = user?.profile
		? `${SERVER_URL}${user.profile}`
		: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
	return (
		<>
			<Navbar />
			<div className="min-h-screen bg-gray-800 text-white px-6 py-32">
				<div className="max-w-5xl mx-auto">
					{/* ===== PROFILE CARD ===== */}
					<div className="bg-gray-900 border border-gold rounded-xl p-6 flex items-center gap-6">
						<img
							src={profileImage}
							alt="profile"
							className="w-24 h-24 rounded-full object-cover border border-gold"
						/>

						<div className="flex-1">
							<h2 className="text-2xl text-gold font-bold">{user?.username}</h2>
							<p className="text-gray-300">{user?.email}</p>
							<p className="mt-1 text-sm">
								Status:{" "}
								<span className="text-gold font-semibold">
									{user?.isPremium ? "Premium" : "Standard"}
								</span>
							</p>
						</div>

						<button
							onClick={() => setEditOpen(true)}
							className="border border-gold px-4 py-2 rounded hover:bg-gold hover:text-black transition"
						>
							Edit Profile
						</button>
					</div>

					<div className="flex gap-4 mt-8">
						<button
							onClick={() => setActiveSection("sell")}
							className={`px-6 py-2 rounded border ${
								activeSection === "sell"
									? "bg-gold text-black border-gold"
									: "border-gold text-gold hover:bg-gold hover:text-black"
							}`}
						>
							Sell Car
						</button>

						<button
							onClick={() => setActiveSection("service")}
							className={`px-6 py-2 rounded border ${
								activeSection === "service"
									? "bg-gold text-black border-gold"
									: "border-gold text-gold hover:bg-gold hover:text-black"
							}`}
						>
							Service Requests
						</button>

						<button
							onClick={() => setActiveSection("favorites")}
							className={`px-6 py-2 rounded border ${
								activeSection === "favorites"
									? "bg-gold text-black border-gold"
									: "border-gold text-gold hover:bg-gold hover:text-black"
							}`}
						>
							Favorites
						</button>
					</div>

					<div className="mt-8">
						{activeSection === "sell" && <SellCar />}
						{activeSection === "service" && <ServiceRequests />}
						{activeSection === "favorites" && <FavoriteCars />}
					</div>
				</div>

				{/* ===== EDIT PROFILE MODAL ===== */}
				{editOpen && <EditProfile close={() => setEditOpen(false)} />}
			</div>
		</>
	);
};

export default UserProfile;
