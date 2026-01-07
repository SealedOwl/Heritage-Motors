import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { getAllCarsAPI } from "../../services/car.api";

const CARS_PER_PAGE = 6;

function Inventory() {
	const [cars, setCars] = useState([]);
	const [loading, setLoading] = useState(true);
	const [sort, setSort] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		fetchCars();
	}, []);

	const fetchCars = async () => {
		const response = await getAllCarsAPI();

		if (response.status === "success") {
			setCars(response.data);
		}
		setLoading(false);
	};

	// ---------- SORT ----------
	const sortedCars = [...cars].sort((a, b) => {
		switch (sort) {
			case "price-low":
				return a.price - b.price;
			case "price-high":
				return b.price - a.price;
			case "year-newest":
				return b.year - a.year;
			case "year-oldest":
				return a.year - b.year;
			case "name-az":
				return a.title.localeCompare(b.title);
			case "name-za":
				return b.title.localeCompare(a.title);
			default:
				return 0;
		}
	});

	// ---------- PAGINATION ----------
	const totalPages = Math.ceil(sortedCars.length / CARS_PER_PAGE);
	const startIndex = (currentPage - 1) * CARS_PER_PAGE;
	const paginatedCars = sortedCars.slice(
		startIndex,
		startIndex + CARS_PER_PAGE
	);

	const changePage = (page) => {
		if (page < 1 || page > totalPages) return;
		setCurrentPage(page);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	if (loading) {
		return (
			<div className="bg-charcoal min-h-screen flex items-center justify-center text-gold text-xl">
				Loading cars...
			</div>
		);
	}

	return (
		<>
			<Navbar />

			<div className="w-full min-h-screen bg-charcoal text-white pt-32 px-8 md:px-16 pb-12">
				<h1 className="text-5xl font-playfair text-gold text-center mb-6">
					Inventory
				</h1>

				<p className="text-center text-gray-300 mb-16 text-xl">
					Explore curated collection of premium vintage automobiles.
				</p>

				{/* SORT */}
				<div className="flex justify-end mb-8">
					<select
						className="p-2 border border-gray-600 rounded text-gray-300 bg-gray"
						value={sort}
						onChange={(e) => {
							setSort(e.target.value);
							setCurrentPage(1);
						}}
					>
						<option value="">Sort By</option>
						<option value="price-low">Price: Low to High</option>
						<option value="price-high">Price: High to Low</option>
						<option value="year-newest">Newest Year</option>
						<option value="year-oldest">Oldest Year</option>
						<option value="name-az">A–Z</option>
						<option value="name-za">Z–A</option>
					</select>
				</div>

				{/* CARS GRID */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
					{paginatedCars.map((car) => (
						<div
							key={car._id}
							className="bg-gray border rounded-lg shadow hover:scale-[1.02] transition"
						>
							<img
								src={car.images[0]}
								alt={car.title}
								className="w-full h-52 object-cover object-center"
							/>

							<div className="p-4">
								<h3 className="text-xl font-playfair text-gold mb-1">
									{car.title}
								</h3>

								<p className="text-gray-400 mb-2">
									{car.year} • {car.color}
								</p>

								<p className="text-xl text-gold font-bold mb-4">
									${car.price.toLocaleString()}
								</p>

								<Link to={`/inventory/${car._id}`}>
									<button className="cursor-pointer w-full py-2 border border-gold text-gold rounded-lg hover:bg-gold hover:text-black transition">
										View Details
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>

				{/* PAGINATION */}
				{totalPages > 1 && (
					<div className="flex justify-center items-center gap-3 mt-12">
						<button
							onClick={() => changePage(currentPage - 1)}
							disabled={currentPage === 1}
							className="px-4 py-2 border border-gold rounded text-gold disabled:opacity-40"
						>
							Prev
						</button>

						{Array.from({ length: totalPages }).map((_, index) => (
							<button
								key={index}
								onClick={() => changePage(index + 1)}
								className={`px-4 py-2 rounded border ${
									currentPage === index + 1
										? "bg-gold text-black border-gold"
										: "border-gray-600 text-gray-300 hover:border-gold"
								}`}
							>
								{index + 1}
							</button>
						))}

						<button
							onClick={() => changePage(currentPage + 1)}
							disabled={currentPage === totalPages}
							className="px-4 py-2 border border-gold rounded text-gold disabled:opacity-40"
						>
							Next
						</button>
					</div>
				)}
			</div>
		</>
	);
}

export default Inventory;
