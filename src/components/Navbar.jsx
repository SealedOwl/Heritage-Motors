import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<nav className="w-full fixed top-0 left-0 z-10 bg-charcoal/90">
			{/* main desktop navbar */}
			<div className="flex items-center justify-between px-6 py-4">
				{/* logo  */}
				<div className="text-gold text-2xl font-playfair tracking-wider">
					HERITAGE <span className="block text-center">MOTORS</span>
				</div>

				{/*desktop nav links  */}
				<div className="hidden md:flex items-center text-gold text-xl gap-5">
					<a href="#" className="hover:text-white transition">
						Home
					</a>
					<a href="#" className="hover:text-white transition">
						Inventory
					</a>
					<a href="#" className="hover:text-white transition">
						Collections
					</a>
					<a href="#" className="hover:text-white transition">
						Services
					</a>
					<a href="#" className="hover:text-white transition">
						About Us
					</a>
					<a href="#" className="hover:text-white transition">
						Contacts
					</a>
				</div>

				{/* search  */}
				<div className=" hidden lg:flex items-center gap-1">
					<input
						type="text"
						placeholder="search..."
						className="bg-white py-1 px-3 rounded"
					/>
					<button className="hidden md:flex text-gold hover:text-white transition cursor-pointer border border-gold py-1 px-2 rounded">
						Search
					</button>
				</div>

				{/* mobile hamburger icon  */}
				<button
					className="md:hidden text-gold text-xl border border-gold px-2 py-1 rounded"
					onClick={() => setOpenMenu((prev) => !prev)}
				>
					<GiHamburgerMenu />
				</button>
			</div>

			{/* mobile slide-out menu  */}
		</nav>
	);
};

export default Navbar;
