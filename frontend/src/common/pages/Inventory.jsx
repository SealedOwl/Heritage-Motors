import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Inventory() {
	const [sort, setSort] = useState("");

	const cars = [
		{
			id: 1,
			name: "1965 Ford Mustang GT",
			price: "$30,000",
			img: "https://cdn.dealeraccelerate.com/crownclassics/1/345/15821/1920x1440/1965-ford-mustang-gt-k-code-fastback",
			color: "Red",
			year: 1967,
		},
		{
			id: 2,
			name: "1970 Chevrolet Chevelle SS",
			price: "$38,500",
			img: "https://www.pcarmarket.com/static/media/uploads/galleries/photos/uploads/galleries/14971-romm-black-chevelle/.thumbnails/PCar_1970_Black_Chevelle_SS396_Coupe-0123.jpg/PCar_1970_Black_Chevelle_SS396_Coupe-0123-tiny-2048x0-0.5x0.jpg",
			color: "Black",
			year: 1969,
		},
		{
			id: 3,
			name: "1963 Jaguar E-Type",
			price: "$60,000",
			img: "https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2020/02/1963-Jaguar-E-Type-Lightweight-Continuation-4.jpg",
			color: "Silver",
			year: 1959,
		},
		{
			id: 4,
			name: "1957 Chevrolet Bel Air",
			price: "$47,000",
			img: "https://s7d9.scene7.com/is/image/wheelpros/american%20racing-vn472-18x8-20x10-polished%20with%20custom%20blue-1957%20chevrolet%20bel%20air%20%206?$2200x1500$&aemtype=gdp",
			color: "Blue",
			year: 1957,
		},
		{
			name: "1966 Lamborghini Miura",
			price: "$97,000",
			img: "https://robbreport.com/wp-content/uploads/2024/06/opener-w-1970-Lamborghini-Miura-P400S_2.jpg?w=1024",
			color: "Silver",
			year: 1959,
		},
		{
			name: "1962 Lamborghini Miura",
			price: "$85,000",
			img: "https://www.beverlyhillscarclub.com/galleria_images/15157/15157_p60_l.jpg",
			color: "Black",
			year: 1959,
		},
	];

	return (
		<>
			<Navbar />

			<div className="w-full min-h-screen bg-charcoal text-white pt-32 px-8 md:px-16 pb-8">
				<h1 className="text-5xl font-playfair text-gold text-center mb-6">
					Inventory
				</h1>

				<p className="text-center text-gray-300 mb-16 text-xl">
					Explore curated collection of premium vintage automobiles.
				</p>

				{/* sort  */}
				<div className="flex justify-end mb-8">
					<select
						name="sort"
						id="sort"
						className="p-2 border border-gray-600 rounded text-gray-300 bg-gray"
						value={sort}
						onChange={(e) => setSort(e.target.value)}
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

				{/* cars collection  */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
					{cars.map((car) => (
						<div
							key={car.id}
							className="bg-gray border rounded-lg shadow hover:scale-[1.02] transition "
						>
							<img
								src={car.img}
								alt={car.name}
								className="w-full h-50 object-cover object-center"
							/>

							<div className="p-4">
								<h3 className="text-xl font-playfair text-gold mb-1">
									{car.name}
								</h3>

								<p className="text-gray-400 mb-2">
									{car.year} - {car.color}
								</p>

								<p className="text-xl text-gold font-bold mb-4">{car.price}</p>

								<Link to={`/inventory/${car.id}`}>
									<button className="cursor-pointer w-full py-2 border border-gold text-gold rounded-lg hover:bg-gold hover:text-black transition">
										View Details
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>

				{/* pagination  */}
			</div>
		</>
	);
}

export default Inventory;
