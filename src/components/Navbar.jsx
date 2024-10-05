import React, { useEffect, useState } from "react";
import { Navbar as BaseNavbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ props }) {
	const location = useLocation();
	const [isExpanded, setIsExpanded] = useState(false);

	// Close the navbar when the location changes
	useEffect(() => {
		setIsExpanded(false);
	}, [location]);

	return (
		<>
			<BaseNavbar
				expand="lg"
				className="m-2 d-flex justify-content-between"
				expanded={isExpanded}
				onToggle={(newState) => setIsExpanded(newState)}
				// not sure why this doesn't work... maybe because Nav.Link is as={Link}?
				onSelect={() => {
					console.log("selected");
					setIsExpanded(false);
				}}
			>
				{/* md or bigger */}
				<BaseNavbar.Brand
					as={Link}
					to="/"
					className="d-none d-md-inline-block fs-3"
				>
					Steven G. Opferman
				</BaseNavbar.Brand>

				{/* smaller than md */}
				<BaseNavbar.Brand as={Link} to="/" className="d-md-none fs-6">
					Steven G. Opferman
				</BaseNavbar.Brand>

				<BaseNavbar.Toggle aria-controls="responsive-navbar-nav" />

				<BaseNavbar.Collapse
					id="responsive-navbar-nav"
					className="justify-content-end"
				>
					<Nav>
						<Nav.Link as={Link} to="/timeline">
							Things I've Done
						</Nav.Link>

						{/* <Nav.Link as={Link} to="/resources">
						Resources
					</Nav.Link> */}

						<Nav.Link as={Link} to="/contact" className="btn btn-warning">
							Contact
						</Nav.Link>
					</Nav>
				</BaseNavbar.Collapse>
			</BaseNavbar>
		</>
	);
}
