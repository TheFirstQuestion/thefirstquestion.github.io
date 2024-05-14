import React from "react";
import { HashRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Timeline from "./pages/Timeline";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import { LinksProvider } from "./contexts/LinksContext";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LayoutsWithNavbar />}>
					<Route index element={<HomePage />} />
					<Route path="/timeline" element={<Timeline />} />
					<Route path="/resources" element={<Resources />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
			</Routes>
		</Router>
	);
}

// via https://stackoverflow.com/a/70040379
function LayoutsWithNavbar() {
	return (
		<LinksProvider>
			<Navbar />
			<Container id="pageContent" className="mt-5 mb-5">
				<Outlet />
			</Container>
		</LinksProvider>
	);
}
