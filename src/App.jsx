import { useState } from "react";
import React from "react";
import "./App.css";
import LandingPage from "./common/pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Inventory from "./common/pages/Inventory";
import Collections from "./common/pages/Collections";
import Services from "./common/pages/Services";
import AboutUs from "./common/pages/AboutUs";
import Contacts from "./common/pages/Contacts";
import PageNotFound from "./common/pages/PageNotFound";
import Auth from "./common/pages/Auth";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/inventory" element={<Inventory />} />
				<Route path="/collections" element={<Collections />} />
				<Route path="/services" element={<Services />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/login" element={<Auth />} />
				<Route path="/register" element={<Auth register />} />
				<Route path="/*" element={<PageNotFound />} />
			</Routes>
		</>
	);
}

export default App;
