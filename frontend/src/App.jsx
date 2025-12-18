import { useState } from "react";
import React from "react";
import "./App.css";
import LandingPage from "./common/pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Inventory from "./common/pages/Inventory";
import Collections from "./common/pages/Collections";
import Services from "./common/pages/Services";
import AboutUs from "./common/pages/AboutUs";
import PageNotFound from "./common/pages/PageNotFound";
import Auth from "./common/pages/Auth";
import AdminHome from "./admin/pages/AdminHome";
import AdminSettings from "./admin/pages/AdminSettings";
import UserProfile from "./users/pages/UserProfile";
import ViewCar from "./users/pages/ViewCar";
import BuyPremium from "./users/pages/BuyPremium";

function App() {
	return (
		<>
			<Routes>
				{/* common  */}
				<Route path="/" element={<LandingPage />} />
				<Route path="/inventory" element={<Inventory />} />
				<Route path="/collections" element={<Collections />} />
				<Route path="/services" element={<Services />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/login" element={<Auth />} />
				<Route path="/register" element={<Auth register />} />
				<Route path="/*" element={<PageNotFound />} />

				{/* users  */}
				<Route path="/user-profile" element={<UserProfile />} />
				<Route path="/inventory/:id" element={<ViewCar />} />
				<Route path="/buy-premium" element={<BuyPremium />} />

				{/* admin  */}
				<Route path="/admin" element={<AdminHome />} />
				<Route path="/admin/settings" element={<AdminSettings />} />
			</Routes>
		</>
	);
}

export default App;
