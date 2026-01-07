import React, { useState } from "react";
import { IoIosLock } from "react-icons/io";
import Navbar from "../components/Navbar";

function Collections() {
	const [isPremiumMember, setIsPremiumMember] = useState(false);

	const collections = [
		{
			id: 1,
			title: "American Muscle Cars",
			description: "Raw power and iconic performance from the golden era.",
			img: "https://images.unsplash.com/photo-1630945688515-306cc4e59977?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			count: 12,
		},
		{
			id: 2,
			title: "European Classics",
			description: "Timeless European engineering and elegance.",
			img: "https://images.unsplash.com/photo-1489008777659-ad1fc8e07097?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			count: 6,
		},
		{
			id: 3,
			title: "JDM Legends",
			description: "Japanese icons that defined a generation of enthusiasts.",
			img: "https://i.pinimg.com/736x/ef/55/85/ef55859b06c198e9baac6e3c0678412f.jpg",
			count: 10,
		},
	];

	const premiumMembersCollection = [
		{
			id: 4,
			title: "Antique & Pre-War Cars",
			description: "Historical masterpieces from early automotive era.",
			img: "https://images.ctfassets.net/lym53uuylvg8/7DIFSGvKPPuGRPq3FSdjBp/c5dfa824e007ec49fb0cb4ec5663db2b/5_Of_The_Best_Pre-War_Cars_Sold_On_CC__1_.jpg",
			count: 6,
		},
		{
			id: 5,
			title: "Luxury Vintage Cars",
			description: "Prestigious vintage sedans and touring automobiles.",
			img: "https://cdn.luxe.digital/media/20230206150858/best-classic-cars-vintage-Aston-Martin-luxe-digital-780x520.jpg",
			count: 11,
		},
		{
			id: 6,
			title: "Limited Edition & Collector Cars",
			description: "Ultra-rare machines for true collectors.",
			img: "https://www.ultimatecarpage.com/images/car/136/Ferrari-250-LM-60482.jpg",
			count: 5,
		},
	];
	return (
		<>
			<Navbar />
			<div className="w-full min-h-screen bg-charcoal text-white pt-32 px-8 md:px-16 pb-8">
				<h1 className="text-5xl font-playfair text-gold text-center mb-6">
					Popular Collections
				</h1>

				<p className="text-center text-gray-300 mb-16 text-xl">
					Explore curated collections of classic, vintage, and rare automobiles.
				</p>

				{/* car collections  */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
					{collections.map((item) => (
						<div
							key={item.id}
							className="bg-gray/60 border rounded-lg shadow hover:scale-[1.02] transition cursor-pointer"
						>
							<div className="w-full h-50">
								<img
									src={item.img}
									alt={item.title}
									className="w-full h-full object-cover"
								/>
							</div>

							<div className="p-4">
								<h2 className="font-playfair text-2xl text-gold mb-2">
									{item.title}
								</h2>

								<p className="text-gray-300 mb-4">{item.description}</p>
								<p className="text-gold font-bold mb-4">Count : {item.count}</p>
								<button className="cursor-pointer w-full py-2 border border-gold text-gold rounded-lg hover:bg-gold hover:text-black transition">
									View Collection
								</button>
							</div>
						</div>
					))}
				</div>

				{/* premium members collections  */}
				<h1 className="text-5xl font-playfair text-gold text-center mb-6">
					Exclusive Premium Collections
				</h1>

				<p className="text-center text-gray-300 mb-16 text-xl">
					Unlock access to our rarest, high-value, and limited-edition
					inventory.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
					{premiumMembersCollection.map((item) => (
						<div
							key={item.id}
							className="bg-gray/60 border rounded-lg shadow hover:scale-[1.02] transition cursor-pointer"
						>
							<div
								className={
									isPremiumMember ? "w-full h-50" : "w-full h-50 opacity-40"
								}
							>
								<img
									src={item.img}
									alt={item.title}
									className="w-full h-full object-cover"
								/>
							</div>

							<div className="p-4">
								<h2 className="font-playfair text-2xl text-gold mb-2">
									{item.title}
								</h2>

								<p className="text-gray-300 mb-4">{item.description}</p>
								<p className="text-gold font-bold mb-4">Count : {item.count}</p>
								<button className="cursor-pointer w-full py-2 border border-gold text-gold rounded-lg hover:bg-gold hover:text-black transition flex justify-center items-center gap-2">
									{isPremiumMember ? (
										"View Collection"
									) : (
										<>
											<IoIosLock /> Join Premium to View Collection
										</>
									)}
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Collections;
