import React from "react";
import { Link } from "react-router-dom";

export default function HomePage({ props }) {
	return (
		<div className="row">
			<div className="col-md-5">
				<img src="img/balloons.png" alt="Balloons" className="img-fluid" />
			</div>

			<div className="col-md-7 d-inline-flex flex-column justify-content-between text-center">
				<div>
					<h1 className="display-1">Steven G. Opferman</h1>
					<em className="text-muted display-6">
						(the G stands for "gives great hugs")
					</em>
				</div>

				<p className="fs-4">Amateur hero. Professional goof. Here to help.</p>
				<div className="d-flex flex-column justify-content-between">
					<Link
						to="/resume"
						className="btn btn-secondary btn-lg btn-block fs-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						RESUME
					</Link>

					<a
						href="mailto:steven.g.opferman@gmail.com"
						className="emailLink link-dark my-4"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="fs-3">steven.g.opferman@gmail.com</span>
					</a>

					<Link
						to="/github"
						className="btn btn-primary btn-lg btn-block fs-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						GITHUB
					</Link>
				</div>
			</div>
		</div>
	);
}
