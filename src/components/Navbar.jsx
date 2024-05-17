import React, { useState, useEffect } from "react";
import { Navbar as BaseNavbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ props }) {
	const [isExpanded, setExpanded] = useState(false);
	const location = useLocation();

	function toggle() {
		setExpanded(!isExpanded);
	}

	// Automatically collapse the navbar when the user has clicked on a link
	useEffect(() => {
		setExpanded(false);
	}, [location]);

	return (
		<BaseNavbar
			expand="lg"
			expanded={isExpanded}
			className="m-2 d-flex justify-content-between"
		>
			<BaseNavbar.Brand as={Link} to="/">
				Steven G. Opferman
			</BaseNavbar.Brand>

			<BaseNavbar.Toggle
				aria-controls="responsive-navbar-nav"
				className="ml-auto"
				onClick={toggle}
			/>

			<BaseNavbar.Collapse
				id="responsive-navbar-nav"
				className="d-flex justify-content-end align-items-start"
			>
				<Nav>
					<Nav.Link as={Link} to="/timeline">
						Things I've Done
					</Nav.Link>

					<Nav.Link as={Link} to="/resources">
						Resources
					</Nav.Link>

					<Nav.Link as={Link} to="/contact" className="btn btn-warning">
						Contact
					</Nav.Link>
				</Nav>
			</BaseNavbar.Collapse>
		</BaseNavbar>
	);
}
