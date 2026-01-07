import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";

function AdminHeader() {
	const { logout } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogout = () => {
		logout(); // clears token + user
		navigate("/login", { replace: true });
	};

	return (
		<nav className="w-full fixed top-0 left-0 z-10 bg-charcoal">
			<div className="flex items-center justify-between px-6 py-4">
				<div className="text-gold text-2xl font-playfair tracking-wider">
					<Link to="/admin-home">
						HERITAGE <span className="block text-center">MOTORS</span>
					</Link>
				</div>

				<button
					onClick={handleLogout}
					className="flex items-center gap-3 cursor-pointer px-6 py-2 border border-gold rounded text-gold hover:bg-gold hover:text-black transition font-bold"
				>
					Logout
					<MdOutlineLogout />
				</button>
			</div>
		</nav>
	);
}

export default AdminHeader;
