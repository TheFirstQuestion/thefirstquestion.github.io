import React, { useContext } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import LinksContext from "../contexts/LinksContext";
import LinkNewTab from "../components/Link";
import { Link } from "react-router-dom";

export default function Contact({ props }) {
	const { links } = useContext(LinksContext);

	return (
		<>
			<Row>
				<Col md={6}>
					<h2>Email</h2>
					<p>
						They all go to the same place, so pick whichever piques your
						curiosity.
					</p>
					<ul>
						<li>
							<LinkNewTab to={links.email}>
								steven.g.opferman@gmail.com
							</LinkNewTab>
						</li>
						<li>sgo@cs.stanford.edu</li>
						<li>sopferman@alumni.stanford.edu</li>
					</ul>
					<p>
						You can also message me on {/* Not 100% sure this works... */}
						<LinkNewTab to="https://discordapp.com/users/1098756525004173402">
							Discord
						</LinkNewTab>
						.
					</p>

					{/* TODO: make this a grid with icons in rounded boxes */}
					<h2>What I'm Up To</h2>
					<p>You can check out what I'm doing these days at the following:</p>
					<ul>
						<li>
							<LinkNewTab to={links.linkedin}>LinkedIn</LinkNewTab> for
							professional stuff
						</li>
						<li>
							<LinkNewTab to={links.github}>GitHub</LinkNewTab> for programming
							projects
						</li>

						<li>
							<LinkNewTab to="https://trakt.tv/users/sg0pf">Trakt</LinkNewTab>{" "}
							for what TV shows and movies I'm watching
						</li>

						<li>
							<LinkNewTab to="https://steamcommunity.com/id/sg0pf/">
								Steam
							</LinkNewTab>{" "}
							for what video games I'm playing{" "}
							<span className="text-muted small fst-italic">
								(probably Stardew Valley)
							</span>
						</li>
						{/* Decided not to include bc limited to 5 scores :( */}
						{/* <li>
							<LinkNewTab to="https://musescore.com/user/6291301/sheetmusic">
								Musescore
							</LinkNewTab>{" "}
							for music arrangements
						</li> */}

						<li>
							<LinkNewTab to="https://www.goodreads.com/user/show/94637917-steven">
								Goodreads
							</LinkNewTab>{" "}
							for what books I'm reading
							{/* TODO: make this responsive */}
							<div>
								<iframe
									title="Goodreads Updates"
									sandbox
									src="https://goodreads.com/widgets/user_update_widget?height=400&num_updates=10&user=94637917"
									frameborder="0"
								/>
							</div>
						</li>

						{/* Could be unprofessional / unsightly to include */}
						{/* <li>
							<LinkNewTab to="https://archiveofourown.org/users/peter_romanoff/bookmarks">
								Ao3
							</LinkNewTab>{" "}
							for what fanfic I'm reading (and recommend)
						</li> */}
					</ul>
				</Col>

				<Col md={6}>
					<blockquote className="blockquote">
						<p>
							"The costs of contacting someone you want to learn from are about
							as close to zero as they'll ever be. Honestly, what's the worst
							that can happen? You come off as someone eager to learn. If they
							ignore you, you know it's because they're too busy <em>doing</em>{" "}
							to <em>talk about</em>. If they're a dick, then you've already
							learned a valuable lesson. Regardless of the outcome, you'll
							always learn something, even if it's just how to lessen the fear
							of rejection by sending that damn email."
						</p>
						<footer className="blockquote-footer">
							<em>Thomas Frank</em>
						</footer>
					</blockquote>

					<h2>Did You Mean...</h2>
					<p>
						The following are <em>not</em> my name, but people search for them
						when they look for me, so I may as well have them on my website.
					</p>
					<ul>
						<li>Stephen Opferman</li>
						<li>Steven Opherman</li>
						<li>Steven Offerman</li>
					</ul>
					<p className="text-muted small fst-italic">
						(Thanks to{" "}
						<LinkNewTab to="https://sites.google.com/site/marywootters/">
							Mary Wootters
						</LinkNewTab>{" "}
						for this idea.)
					</p>
					{/* <h2>Anonymous Message</h2>
					<Form
						action="https://script.google.com/macros/s/AKfycbzwwq0C2z0kZPmsu4jTCURtjwR6uYBD9Lu7yBG5zH3TZETuTa-e/exec"
						className="gform"
						method="post"
					>
						<Card>
							<Card.Header>
								<p className="m-0">
									This is anonymous by default, so if you want a response,
									include your email in the message.
								</p>
							</Card.Header>
							<Card.Body>
								<Form.Group>
									<Form.Control
										as="textarea"
										name="message"
										placeholder="FUbS71f pH5549H2 HQf0Xu49HG!"
										required
									/>
								</Form.Group>
								<Form.Group className="d-none">
									<Form.Control
										type="text"
										name="url"
										placeholder="Please leave this empty!"
									/>
								</Form.Group>
								<div style={{ display: "none" }} className="thankyou_message">
									<p>Your message has been sent.</p>
									<p className="handwriting">Thank you for taking a risk!</p>
								</div>
								<div className="text-center">
									<Button type="submit" variant="success">
										Send
									</Button>
								</div>
							</Card.Body>
						</Card>
					</Form> */}
				</Col>
			</Row>

			<hr />

			<Row>
				<Col md={7}>
					<h2>Ways In Which I Can Definitely Help You</h2>
					<ul>
						<li>
							I'd love to collaborate on projects! I'm most helpful for
							programming, writing, and music stuff, but open to other
							suggestions!
						</li>
						<ul>
							<li>
								You can get a sense of my programming experience from{" "}
								<Link to="/timeline">my resume</Link>, but I'm also pretty good
								at picking up new languages and frameworks. I'm always willing
								to learn!
							</li>
							<li>
								I think I'm a pretty good editor; I'm happy to take a look at
								articles, papers, essays, fanfic, etc.
							</li>
							<li>
								I have access to a variety of musical instruments, both at
								school and at home, and I'm happy to record parts for pretty
								much anything!
							</li>
						</ul>

						<li>
							I have a "network" with "connections," as it's termed in the
							professional world. Looking at{" "}
							<Link to="/timeline">my resume</Link> or{" "}
							<LinkNewTab to={links.linkedin}>LinkedIn</LinkNewTab> can give you
							an idea of the kind of people I know.
						</li>

						<li>
							I love to talk about myself. This probably isn't a surprise, given
							that you're on an entire website dedicated to talking about
							myself, but it's worth stating explicitly. I'm happy to be
							interviewed for research, class projects, articles, etc.
						</li>
					</ul>
				</Col>

				<Col md={5}>
					<h2>
						Ways In Which I Probably <em>Can't</em> Help You
					</h2>
					<ul>
						<li>
							I'm happy to share my story of how I got into Stanford, and give
							advice on how to get into Stanford, but it was the only big-name
							school that I was accepted to, so I don't know how helpful I am
							more generally.
						</li>
						<li>
							If you're a bot sending a message about cryptocurrency or where to
							find hot single women in my area, <em>please</em> don't reach out
							to me. I'm good.
						</li>
						<li>
							I only speak English, so if your message is in another language
							and Google Translate doesn't get me close, I'm not able to help.
							Sorry :/
						</li>
					</ul>
				</Col>
			</Row>
		</>
	);
}
