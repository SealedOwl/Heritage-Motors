import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../common/components/Navbar";

const ViewCar = () => {
	const { id } = useParams();

	const cars = [
		{
			id: "1",
			name: "1965 Ford Mustang GT",
			price: "$30,000",
			img: "https://cdn.dealeraccelerate.com/crownclassics/1/345/15821/1920x1440/1965-ford-mustang-gt-k-code-fastback",
			year: 1967,
			color: "Red",
			engine: "4.7L V8",
			transmission: "Manual",
			mileage: "72,000 km",
			fuel: "Petrol",
			drive: "RWD",
			condition: "Fully Restored",
			description:
				"A beautifully restored 1965 Ford Mustang GT featuring its original V8 engine, classic red finish, and period-correct interior.",
		},
	];

	const car = cars.find((c) => c.id === id);

	if (!car) {
		return (
			<div className="bg-charcoal min-h-screen text-white flex items-center justify-center">
				<p className="text-xl text-gray-400">Car not found.</p>
			</div>
		);
	}

	const Spec = ({ label, value }) => (
		<div>
			<p className="text-gray-400 text-sm">{label}</p>
			<p className="text-gold text-lg">{value}</p>
		</div>
	);

	return (
		<>
			<Navbar />

			<div className="bg-charcoal min-h-screen text-white pt-32 px-8 md:px-16 pb-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div>
						<img
							src={car.img}
							alt={car.name}
							className="w-full rounded-xl shadow-lg"
						/>

						<div className="mt-6 space-y-4">
							<button className="cursor-pointer w-full py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-black transition">
								Add to Favorites
							</button>

							<button className="cursor-pointer w-full py-3 bg-gold text-black rounded-lg text-lg font-semibold hover:opacity-90 transition">
								Request Purchase
							</button>
						</div>
					</div>

					<div>
						<h1 className="text-4xl font-playfair text-gold mb-4">
							{car.name}
						</h1>

						<p className="text-gray-400 mb-2">
							{car.year} • {car.color} • {car.condition}
						</p>

						<p className="text-3xl text-gold font-bold mb-6">{car.price}</p>

						<p className="text-gray-300 mb-8 leading-relaxed">
							{car.description}
						</p>

						<h2 className="text-2xl font-playfair text-gold mb-4">
							Specifications
						</h2>

						<div className="grid grid-cols-2 gap-6 bg-[#111]/60 border border-[#222] p-6 rounded-xl">
							<Spec label="Engine" value={car.engine} />
							<Spec label="Transmission" value={car.transmission} />
							<Spec label="Mileage" value={car.mileage} />
							<Spec label="Fuel Type" value={car.fuel} />
							<Spec label="Drive Type" value={car.drive} />
							<Spec label="Condition" value={car.condition} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ViewCar;
