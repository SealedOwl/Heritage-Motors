import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";

function AdminHeader() {
	return (
		<>
			<nav className="w-full fixed top-0 left-0 z-10 bg-charcoal">
				<div className="flex items-center justify-between px-6 py-4">
					<div className="text-gold text-2xl font-playfair tracking-wider">
						<Link to={"/"}>
							{" "}
							HERITAGE <span className="block text-center">MOTORS</span>{" "}
						</Link>
					</div>
					<div>
						<Link to={"/"}>
							<button className="flex items-center justify-between gap-3 cursor-pointer px-2 lg:px-6 md:px-3 py-2 border border-gold rounded text-gold hover:bg-gold hover:text-black transition font-bold">
								Logout
								<MdOutlineLogout />
							</button>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
}

export default AdminHeader;
