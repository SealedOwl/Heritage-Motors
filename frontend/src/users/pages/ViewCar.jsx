import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../common/components/Navbar";
import { getCarByIdAPI } from "../../services/car.api";
import { addFavoriteAPI } from "../../services/user.api";

const ViewCar = () => {
	const { id } = useParams();
	const [car, setCar] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchCar();
	}, [id]);

	const fetchCar = async () => {
		const response = await getCarByIdAPI(id);

		if (response.status === "success") {
			setCar(response.data);
		}

		setLoading(false);
	};

	if (loading) {
		return (
			<div className="bg-charcoal min-h-screen flex items-center justify-center text-gold text-xl">
				Loading car details...
			</div>
		);
	}

	if (!car) {
		return (
			<div className="bg-charcoal min-h-screen flex items-center justify-center text-gray-400 text-xl">
				Car not found.
			</div>
		);
	}

	const Spec = ({ label, value }) => (
		<div>
			<p className="text-gray-400 text-sm">{label}</p>
			<p className="text-gold text-lg">{value}</p>
		</div>
	);

	const token = localStorage.getItem("token");

	const handleAddFavorite = async () => {
		if (!token) {
			alert("Please login to add favorites");
			return;
		}

		const response = await addFavoriteAPI(car._id, token);

		if (response.status === "success") {
			alert("Added to favorites ");
		} else {
			alert(response.message);
		}
	};

	return (
		<>
			<Navbar />

			<div className="bg-charcoal min-h-screen text-white pt-32 px-8 md:px-16 pb-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* IMAGE + ACTIONS */}
					<div>
						<img
							src={car.images[0]}
							alt={car.title}
							className="w-full rounded-xl shadow-lg"
						/>

						<div className="mt-6 space-y-4">
							<button
								onClick={handleAddFavorite}
								className="w-full py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-black transition cursor-pointer"
							>
								Add to Favorites
							</button>

							<button className="w-full py-3 bg-gold text-black rounded-lg text-lg font-semibold hover:opacity-80 transition cursor-pointer">
								Request Purchase
							</button>
						</div>
					</div>

					{/* DETAILS */}
					<div>
						<h1 className="text-4xl font-playfair text-gold mb-4">
							{car.title}
						</h1>

						<p className="text-gray-400 mb-2">
							{car.year} • {car.color} • {car.condition}
						</p>

						<p className="text-3xl text-gold font-bold mb-6">
							${car.price.toLocaleString()}
						</p>

						<p className="text-gray-300 mb-8 leading-relaxed">
							{car.description}
						</p>

						<h2 className="text-2xl font-playfair text-gold mb-4">
							Specifications
						</h2>

						<div className="grid grid-cols-2 gap-6 bg-[#111]/60 border border-[#222] p-6 rounded-xl">
							<Spec label="Engine" value={car.engine} />
							<Spec label="Transmission" value={car.transmission} />
							<Spec
								label="Distance Travelled"
								value={`${car.distanceTravelled.value} ${car.distanceTravelled.unit}`}
							/>
							<Spec label="Fuel Type" value={car.fuelType} />
							<Spec label="Drive Type" value={car.driveType} />
							<Spec label="Condition" value={car.condition} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ViewCar;
