import React, { useState, useEffect, useContext } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../style/carousel.css";
import LinkNewTab from "../components/LinkNewTab";
import { LinksContext } from "../contexts/LinksContext";

export default function Timeline({ props }) {
	const { links } = useContext(LinksContext);
	const [data, setData] = useState([]);

	// Fetch the data from the JSON file
	useEffect(() => {
		fetch("/timeline_data.json")
			.then((response) => response.json())
			.then((data) => {
				// Make sure any links in the description open in a new tab
				data.forEach((item) => {
					item.description = item.description.replace(
						/<a /g,
						'<a rel="noreferrer noopener" target="_blank" '
					);
				});
				setData(data);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	if (!data) {
		return <></>;
	}

	return (
		<>
			<Card className="border border-dark rounded text-center">
				<Card.Body>
					<Card.Title>The Longest, Most In-Depth Resume Ever</Card.Title>
					<Card.Text>
						<em>
							If you just want the standard, less-cool,
							not-as-fun-but-fits-on-one-page version,{" "}
							<LinkNewTab to={links.resume}>here it is</LinkNewTab>. But know
							that your actions have made me sad.
						</em>
					</Card.Text>
				</Card.Body>
				{/* <Card.Footer>
					<Alert variant="warning">
						Heads up: This page is dynamically generated &#8212; to keep myself
						accountable, programming project information comes directly from
						GitHub. <br />
						That means sometimes it's glitchy on first load. It's a work in
						progress! Refreshing the page *should* fix it.
					</Alert>
				</Card.Footer> */}
			</Card>

			<ResponsiveMasonry
				columnsCountBreakPoints={{ 350: 1, 1000: 2, 1400: 3 }}
				gutter="1rem"
			>
				<Masonry>
					{data.map((item, index) => (
						<ItemCard item={item} key={index} />
					))}
				</Masonry>
			</ResponsiveMasonry>
		</>
	);
}

const ItemCard = ({ item, index }) => {
	const combinedItems = [];

	// Add photos to combinedItems
	if (item.photos) {
		item.photos.forEach((photo) => {
			combinedItems.push({
				type: "image",
				item: photo,
			});
		});
	}
	if (item.images) {
		item.images.forEach((photo) => {
			combinedItems.push({
				type: "image",
				item: photo,
			});
		});
	}

	// Add videos to combinedItems
	if (item.videos) {
		item.videos.forEach((video) => {
			combinedItems.push({
				type: "video",
				item: video,
			});
		});
	}

	// The cards
	return (
		<Card className="d-inline-block" key={index} style={{ margin: "1rem" }}>
			{/* TODO: equally space these vertically */}
			<Card.Body>
				<Card.Title>{item.title}</Card.Title>

				{/* TODO: humanize the dates, right-align? */}
				{item.date && (
					<Card.Text className="text-muted small">Date: {item.date}</Card.Text>
				)}

				<div className="text-center" style={{ width: "100%" }}>
					<MediaCarousel entries={combinedItems} />
				</div>

				<Card.Text dangerouslySetInnerHTML={{ __html: item.description }} />

				{/* Links */}
				<div className="d-flex justify-content-around align-items-center">
					{item.links?.map((link, index) => (
						<Button
							key={index}
							href={link.url}
							rel="noreferrer noopener"
							target="_blank"
							variant="outline-primary"
						>
							{link.name}
						</Button>
					))}

					{/* Files */}
					{item.files?.map((file, index) => (
						<Button
							key={index}
							href={file.path}
							variant="outline-secondary"
							rel="noreferrer noopener"
							target="_blank"
						>
							{file.name}
						</Button>
					))}
				</div>

				<ul className="card-footer text-muted fst-italic mb-0 pb-0 mt-4">
					Tags:
					{item.tags?.map((tag, index) => {
						if (index === 0) {
							return ` ${tag}`;
						} else {
							return `, ${tag}`;
						}
					})}
				</ul>
			</Card.Body>
		</Card>
	);
};

const MediaCarousel = ({ entries }) => {
	// Do not render if there are no entries
	if (!entries || entries.length === 0) {
		return <></>;
	}

	// If there is only one entry, do not render the carousel
	if (entries.length === 1) {
		const entry = entries[0];
		return entry.type === "image" ? (
			<ItemImage item={entry.item} />
		) : (
			<ItemVideo item={entry.item} />
		);
	}

	return (
		<Carousel
			interval={3000}
			indicators={false}
			pause={"hover"}
			prevIcon={
				<BsChevronCompactLeft
					style={{
						color: "black",
						boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
						backgroundColor: "rgba(255, 255, 255, 0.7)",
						borderRadius: "50%",
						padding: "1px",
					}}
				/>
			}
			nextIcon={
				<BsChevronCompactRight
					style={{
						color: "black",
						boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
						backgroundColor: "rgba(255, 255, 255, 0.7)",
						borderRadius: "50%",
						padding: "1px",
					}}
				/>
			}
		>
			{entries.map((entry, index) => (
				<Carousel.Item key={index}>
					{entry.type === "image" ? (
						<ItemImage item={entry.item} />
					) : (
						<ItemVideo item={entry.item} />
					)}
				</Carousel.Item>
			))}
		</Carousel>
	);
};

const ItemImage = ({ item }) => (
	<img
		src={item.url}
		className="img-fluid"
		alt={item.alt}
		style={{
			maxHeight: "300px",
			maxWidth: "100%",
		}}
	/>
);

const ItemVideo = ({ item }) => (
	<div className="embed-responsive">
		<iframe
			allowFullScreen
			title={item}
			src={item}
			className="embed-responsive-item"
			style={{
				height: "100%",
				objectFit: "cover",
			}}
		/>
	</div>
);
