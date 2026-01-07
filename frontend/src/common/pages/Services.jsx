import { useState } from "react";
import RequestService from "../components/RequestService";
import Navbar from "../components/Navbar";
import { FaGears } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { FaUserGear } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Services() {
	const [openRequest, setOpenRequest] = useState(false);

	const { user } = useContext(AuthContext);

	const services = [
		{
			id: 1,
			title: "Vintage Car Restoration",
			desc: "Full-scale restoration using authentic parts, expert craftsmanship, and historical accuracy to bring timeless machines back to life.",
			icon: <FaGears className="text-5xl" />,
		},
		{
			id: 2,
			title: "Authenticity Verification",
			desc: "Comprehensive VIN matching, documentation validation, and heritage tracing to certify full originality and collectible value.",
			icon: <MdVerifiedUser className="text-5xl" />,
		},

		{
			id: 3,
			title: "Custom Modification",
			desc: "Tasteful modern upgrades such as suspension tuning, enhanced braking, and luxury interior refinements while preserving vintage soul.",
			icon: <FaUserGear className="text-5xl" />,
		},
	];
	return (
		<>
			<Navbar />
			<div className="bg-charcoal min-h-screen text-white pt-32 pb-20 px-6 md:px-16">
				<h1 className="text-5xl font-playfair text-gold text-center mb-6">
					Our Services
				</h1>

				<p className="text-center text-gray-300 mb-16 text-xl">
					Discover specialized premium services designed exclusively for vintage
					and collectible automobiles.
				</p>

				<div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-10 mb-16">
					{services.map((item) => (
						<div
							key={item.id}
							className="bg-gray border border-gold rounded-lg backdrop-filter p-6 flex flex-col items-center justify-center gap-3"
						>
							{item.icon}
							<p className="text-gold text-2xl text-center font-semibold">
								{item.title}
							</p>
							<p className="text-gray-400 text-center text-xl">{item.desc}</p>
						</div>
					))}
					<div className="bg-gray border border-gold rounded-lg backdrop-filter p-6 flex flex-col items-center justify-center gap-3">
						<FaCar className="text-5xl" />
						<p className="text-gold text-2xl text-center font-semibold">
							Custom Car Sourcing
						</p>
						<p className="text-gray-400 text-center text-xl">
							Looking for a rare classic? We source vintage automobiles
							worldwide through our trusted collector and dealer network.
						</p>
						{!user?.isPremium && (
							<p className="flex gap-2 items-center text-gold text-sm">
								<IoMdLock /> Premium Service
							</p>
						)}
					</div>
				</div>

				<button
					onClick={() => {
						if (!user) {
							alert("Please login to request a service");
							return;
						}
						setOpenRequest(true);
					}}
					className=" mx-auto block text-gold text-xl border border-gold rounded p-2 cursor-pointer hover:text-black hover:bg-gold"
				>
					Request Service
				</button>
			</div>
			{openRequest && <RequestService close={() => setOpenRequest(false)} />}
		</>
	);
}

export default Services;
