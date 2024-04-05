import React from "react";
import { HashRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";

export default function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<LayoutsWithNavbar />}>
						<Route index element={<HomePage />} />
					</Route>
				</Routes>
			</div>
		</Router>
	);
}

// via https://stackoverflow.com/a/70040379
function LayoutsWithNavbar() {
	return (
		<>
			<Navbar />
			<div className="container mt-5" id="pageContent">
				<Outlet />
			</div>
		</>
	);
}
