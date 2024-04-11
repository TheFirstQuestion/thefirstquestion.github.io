import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ props }) {
	return (
		<nav className="navbar navbar-expand-lg navbar-scroll m-2 px-5 d-flex flex-row justify-content-center align-items-space-between">
			<Link className="navbar-brand" to="/">
				Steven G. Opferman
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
						<Link className="nav-link" to="/timeline">
							Things I've Done
						</Link>
					</li>

					{/* <li className="nav-item">
						<Link className="nav-link" to="/hero-things">
							Hero Things
						</Link>
					</li>

					<li className="nav-item">
						<Link className="nav-link" to="/random">
							Random
						</Link>
					</li> */}

					<li className="nav-item">
						<Link className="nav-link" to="/resources">
							Resources
						</Link>
					</li>
				</ul>

				<Link to="/contact" className="nav-link btn btn-dark ms-3">
					Contact
				</Link>
			</div>
		</nav>
	);
}
