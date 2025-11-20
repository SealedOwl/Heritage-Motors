import { useState } from "react";
import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Collections from "./pages/Collections";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import PageNotFound from "./pages/PageNotFound";

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
				<Route path="/*" element={<PageNotFound />} />
			</Routes>
		</>
	);
}

export default App;
