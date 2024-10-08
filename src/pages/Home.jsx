import React, { useContext } from "react";
import LinkNewTab from "../components/LinkNewTab";
import LinksContext from "../contexts/LinksContext";

export default function HomePage({ props }) {
	const { links } = useContext(LinksContext);

	return (
		<div className="row">
			<div className="col-md-5">
				<img
					src="img/headshot-NY-mahjong.jpg"
					alt="Steven, a white boy with fluffy brown hair and black glasses. He's wearing a blue and red striped rugby shirt with a white collar and smiling broadly."
					className="img-fluid"
				/>
			</div>

			<div className="col-md-7 d-inline-flex flex-column justify-content-between text-center">
				<div>
					<h1 className="display-2">Steven G. Opferman</h1>
					<h2 className="text-muted display-6">
						<em>(the G stands for "gives great hugs")</em>
					</h2>
				</div>

				<p className="fs-4">Amateur hero. Professional goof. Here to help.</p>

				<div className="d-flex flex-column justify-content-between">
					<a
						href={links.resume}
						className="btn btn-secondary btn-lg btn-block fs-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						RESUME
					</a>

					<a
						href={links.email}
						className="emailLink link-dark my-4"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="fs-3">steven.g.opferman@gmail.com</span>
					</a>

					<LinkNewTab
						to={links.github}
						className="btn btn-primary btn-lg btn-block fs-3"
					>
						GITHUB
					</LinkNewTab>
				</div>
			</div>
		</div>
	);
}
