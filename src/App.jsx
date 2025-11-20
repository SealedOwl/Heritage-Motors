import { useState } from "react";
import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Collections from "./pages/Collections";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/inventory" element={<Inventory />} />
				<Route path="/collections" element={<Collections />} />
			</Routes>
		</>
	);
}

export default App;
