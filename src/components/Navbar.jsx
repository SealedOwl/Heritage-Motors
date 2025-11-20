import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<nav className="w-full fixed top-0 left-0 z-10 bg-charcoal/90">
			{/* main desktop navbar */}
			<div className="flex items-center justify-between px-6 py-4">
				{/* logo  */}
				<div className="text-gold text-2xl font-playfair tracking-wider">
					<Link to={"/"}>
						{" "}
						HERITAGE <span className="block text-center">MOTORS</span>{" "}
					</Link>
				</div>

				{/*desktop nav links  */}
				<div className="hidden md:flex items-center text-gold text-xl gap-5 xl:gap-10">
					<Link to={"/"} className="hover:text-white transition">
						Home
					</Link>

					<Link to={"/inventory"} className="hover:text-white transition">
						Inventory
					</Link>

					<Link to={"/collections"} className="hover:text-white transition">
						Collections
					</Link>

					<Link to={"/services"} className="hover:text-white transition">
						Services
					</Link>

					<Link to={"/about-us"} className="hover:text-white transition">
						About Us
					</Link>

					<Link to={"/contacts"} className="hover:text-white transition">
						Contacts
					</Link>
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
			<div
				className={`bg-charcoal fixed top-0 right-0 h-full w-60 border shadow-lg transform transition-all duration-300 ${
					openMenu ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex items-center justify-between p-5">
					<p className="text-xl text-gold font-playfair">Menu</p>
					<button
						className="px-3 py-1 border border-gold text-gold rounded "
						onClick={() => {
							setOpenMenu((prev) => !prev);
						}}
					>
						X
					</button>
				</div>

				{/* mobile nav links  */}
				<div className="flex flex-col text-gold text-xl gap-5 p-5">
					<a
						href="/"
						onClick={() => {
							setOpenMenu((prev) => !prev);
						}}
					>
						Home
					</a>
					<a
						href="/"
						onClick={() => {
							setOpenMenu((prev) => !prev);
						}}
					>
						Inventory
					</a>
					<a
						href="/"
						onClick={() => {
							setOpenMenu((prev) => !prev);
						}}
					>
						Collecttions
					</a>
					<a
						href="/"
						onClick={() => {
							setOpenMenu((prev) => !prev);
						}}
					>
						Services
					</a>
					<a
						href="/"
						onClick={() => {
							setOpenMenu((prev) => !prev);
						}}
					>
						About Us
					</a>
					<a
						href="/"
						onClick={() => {
							setOpenMenu((prev) => !prev);
						}}
					>
						Contact
					</a>
				</div>
				{/* search  */}
				<div className="flex flex-col p-5 gap-2">
					<input
						type="text"
						placeholder="search..."
						className="w-full rounded bg-white px-2 "
					/>
					<button className="text-gold border border-gold py-1 px-2 rounded">
						Search
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
