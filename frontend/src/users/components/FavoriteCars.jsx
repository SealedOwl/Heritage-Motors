import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFavoritesAPI, removeFavoriteAPI } from "../../services/user.api";

const FavoriteCars = () => {
	const [favorites, setFavorites] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchFavorites();
	}, []);

	const fetchFavorites = async () => {
		const token = localStorage.getItem("token");

		if (!token) {
			setLoading(false);
			return;
		}

		const response = await getFavoritesAPI(token);

		if (response.status === "success") {
			setFavorites(response.data);
		}

		setLoading(false);
	};

	const handleRemoveFavorite = async (carId) => {
		const token = localStorage.getItem("token");
		if (!token) return;

		const response = await removeFavoriteAPI(carId, token);

		if (response.status === "success") {
			// update UI instantly
			setFavorites((prev) => prev.filter((car) => car._id !== carId));
		} else {
			alert(response.message || "Failed to remove favorite");
		}
	};

	if (loading) {
		return <p className="text-gold">Loading favorites...</p>;
	}

	if (favorites.length === 0) {
		return (
			<p className="text-gray-400">
				You haven’t added any cars to favorites yet.
			</p>
		);
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{favorites.map((car) => (
				<div
					key={car._id}
					className="bg-gray-900 border border-gold rounded-lg overflow-hidden"
				>
					<img
						src={car.images?.[0]}
						alt={car.title}
						className="w-full h-44 object-cover"
					/>

					<div className="p-4">
						<h3 className="text-lg text-gold font-semibold mb-1">
							{car.title}
						</h3>

						<p className="text-sm text-gray-400 mb-2">
							{car.year} • {car.color}
						</p>

						<p className="text-gold font-bold mb-4">
							${car.price.toLocaleString()}
						</p>

						<Link to={`/inventory/${car._id}`}>
							<button className="w-full mb-2 py-2 border border-gold text-gold rounded hover:bg-gold hover:text-black transition">
								View Details
							</button>
						</Link>

						<button
							onClick={() => handleRemoveFavorite(car._id)}
							className="w-full mb-2 py-2 border border-gold text-gold rounded hover:bg-gold hover:text-black transition"
						>
							Remove from Favorites
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default FavoriteCars;
