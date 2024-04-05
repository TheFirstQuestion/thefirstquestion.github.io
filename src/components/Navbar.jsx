import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ props }) {
	return (
		<nav className="navbar navbar-expand-lg navbar-scroll m-2">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<i className="fab fa-mdb fa-4x">Steven G. Opferman</i>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i className="fas fa-bars"></i>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/pages/timeline">
								Things I've Done
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/pages/hero-things">
								Hero Things
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/pages/random">
								Random
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/pages/resources">
								Resources
							</Link>
						</li>
					</ul>

					<Link to="/pages/contact" className="nav-link btn btn-dark ms-3">
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
}
