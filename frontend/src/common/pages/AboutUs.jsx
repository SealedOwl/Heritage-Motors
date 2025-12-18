import React from "react";
import Navbar from "../components/Navbar";

const AboutUs = () => {
	return (
		<>
			<Navbar />
			<div className="bg-charcoal min-h-screen text-white pt-32 pb-20 px-6 md:px-16">
				<h1 className="text-5xl font-playfair text-gold text-center mb-6">
					About Us
				</h1>
				<p className="text-center text-gray-300 mb-16 text-xl max-w-2xl mx-auto">
					Heritage Motors is a premium platform dedicated to connecting vintage
					car enthusiasts with authentic, collectible automobiles.
				</p>

				<section className="max-w-4xl mx-auto mb-16">
					<p className="text-gray-300 ">
						We work with <span className="text-gold">verified dealers</span>,
						trusted collectors, and passionate owners to bring you the finest
						vintage machines. Every listing on our platform is inspected for
						authenticity and quality, ensuring a reliable and transparent buying
						experience.
					</p>

					<p className="text-gray-300  mt-6">
						Enthusiasts and collectors can also{" "}
						<span className="text-gold">
							list their own vintage cars for sale
						</span>
						, reaching a dedicated audience searching for rare classics. Whether
						you’re buying or selling, Heritage Motors delivers a seamless,
						premium experience for every vintage car lover.
					</p>
				</section>

				<section className="max-w-4xl mx-auto">
					<h2 className="text-3xl font-playfair text-gold mb-4">
						Why Choose Us
					</h2>

					<ul className="space-y-3 text-gray-300">
						<li>✔ Verified dealers and trusted individual sellers</li>
						<li>✔ Authentic, well-documented vintage cars</li>
						<li>✔ Easy listing system for users wanting to sell their car</li>
						<li>✔ Premium support for buyers and sellers</li>
					</ul>
				</section>
			</div>
		</>
	);
};

export default AboutUs;
