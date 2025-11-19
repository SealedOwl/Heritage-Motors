import React from "react";

function LandingPage() {
	const carsCollections = [
		{
			title: "American Muscle Cars",
			img: "https://images.unsplash.com/photo-1630945688515-306cc4e59977?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			title: "European Classics",
			img: "https://images.unsplash.com/photo-1489008777659-ad1fc8e07097?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			title: "Italian Exotics",
			img: "https://www.supercars.net/blog/wp-content/uploads/2016/05/Screenshot-2016-05-16-15.39.33.png",
		},
	];

	const featuredCars = [
		{
			name: "1965 Ford Mustang GT",
			price: "$30,000",
			img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
		},
		{
			name: "1970 Chevrolet Chevelle SS",
			price: "$38,500",
			img: "https://www.pcarmarket.com/static/media/uploads/galleries/photos/uploads/galleries/14971-romm-black-chevelle/.thumbnails/PCar_1970_Black_Chevelle_SS396_Coupe-0123.jpg/PCar_1970_Black_Chevelle_SS396_Coupe-0123-tiny-2048x0-0.5x0.jpg",
		},
		{
			name: "1963 Jaguar E-Type",
			price: "$60,000",
			img: "https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2020/02/1963-Jaguar-E-Type-Lightweight-Continuation-4.jpg",
		},
		{
			name: "1957 Chevrolet Bel Air",
			price: "$47,000",
			img: "https://s7d9.scene7.com/is/image/wheelpros/american%20racing-vn472-18x8-20x10-polished%20with%20custom%20blue-1957%20chevrolet%20bel%20air%20%206?$2200x1500$&aemtype=gdp",
		},
		{
			name: "1966 Lamborghini Miura",
			price: "$97,000",
			img: "https://robbreport.com/wp-content/uploads/2024/06/opener-w-1970-Lamborghini-Miura-P400S_2.jpg?w=1024",
		},
		{
			name: "1962 Lamborghini Miura",
			price: "$85,000",
			img: "https://www.beverlyhillscarclub.com/galleria_images/15157/15157_p60_l.jpg",
		},
	];
	return (
		<div className="bg-charcoal text-white">
			{/* hero section  */}
			<section className="relative h-[95vh] flex justify-center items-center">
				<img
					src="https://images.unsplash.com/photo-1604940500627-d3f44d1d21c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Vintage Cars"
					className="absolute w-full h-full inset-0 object-cover opacity-40"
				/>

				<div className="relative text-center">
					<h1 className="text-5xl md:text-7xl font-playfair text-gold">
						Experience Automotive Heritage
					</h1>

					<p className="mt-4 text-2xl text-gray-300 ">
						Premium Vintage Cars Curated for True Enthusiasts
					</p>

					<div className="mt-8 flex justify-center items-center gap-4">
						<button className="cursor-pointer px-6 py-3 text-lg rounded border border-gold hover:bg-gold hover:text-charcoal transition">
							Explore Inventory
						</button>
						<button className="cursor-pointer px-6 py-3 text-lg rounded border border-gold hover:bg-gold hover:text-charcoal transition">
							View Collections
						</button>
					</div>

					<div className="mt-8 flex justify-center items-center gap-10 text-gray-300">
						<div>
							<p className="text-3xl font-bold text-gold">15+</p>
							<p className="text-lg">Years of Legacy</p>
						</div>
						<div>
							<p className="text-3xl font-bold text-gold">200+</p>
							<p className="text-lg">Vintage Cars Collection</p>
						</div>
						<div>
							<p className="text-3xl font-bold text-gold">Global</p>
							<p className="text-lg">Premium Clients</p>
						</div>
					</div>
				</div>
			</section>

			{/* collections section  */}
			<section className="py-20 px-5 md:px-16">
				<h2 className="text-3xl font-playfair text-center text-gold mb-12">
					Collections
				</h2>

				<div className="grid grid-cols-1 gap-10 md:grid-cols-3">
					{carsCollections.map((item, index) => (
						<div
							key={index}
							className="relative overflow-hidden rounded-xl hover:scale-[1.03] transition "
						>
							<img
								src={item.img}
								alt="cars collections image"
								className="w-full h-70 object-cover opacity-80 hover:opacity-100 transition"
							/>
							<div className="absolute inset-0 flex items-center justify-center bg-charcoal/40 hover:bg-charcoal/10 transition">
								<h2 className="text-2xl">{item.title}</h2>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* featured cars section  */}
			<section className="py-20 px-5 md:px-16 bg-gray">
				<h2 className="text-3xl font-playfair text-center text-gold mb-12">
					Featured Cars
				</h2>

				<div className="grid grid-cols-1 gap-10 md:grid-cols-3">
					{featuredCars.map((item, index) => (
						<div
							key={index}
							className="p-4 rounded-lg hover:scale-[1.03] transition bg-charcoal"
						>
							<img
								src={item.img}
								alt="featured cars"
								className="w-full h-55 object-cover rounded-md mb-4 object-center"
							/>
							<h3 className="text-xl font-bold">{item.name}</h3>
							<p className="text-gold font-bold">{item.price}</p>
							<button className="cursor-pointer mt-4 w-full py-2 border border-gold text-gold rounded hover:text-black hover:bg-gold transition">
								View Details
							</button>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}

export default LandingPage;
