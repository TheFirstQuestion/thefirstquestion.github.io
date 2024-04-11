import React, { useState, useEffect, useRef } from "react";
import { Alert, Button, Card, Carousel } from "react-bootstrap";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import "../style/carousel.css";

export default function Timeline({ props }) {
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

	return (
		<>
			<Card className="border border-dark rounded text-center">
				<Card.Body>
					<Card.Title>The Longest, Most In-Depth Resume Ever</Card.Title>
					<Card.Text>
						<em>
							If you just want the standard, less-cool,
							not-as-fun-but-fits-on-one-page version,
							<a href="#" rel="noreferrer noopener" target="_blank">
								here it is
							</a>
							. But know that your actions have made me sad.
						</em>
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Alert variant="warning">
						Heads up: This page is dynamically generated &#8212; to keep myself
						accountable, programming project information comes directly from
						GitHub. <br />
						That means sometimes it's glitchy on first load. It's a work in
						progress! Refreshing the page *should* fix it.
					</Alert>
				</Card.Footer>
			</Card>

			<div>
				{data.map((item, index) => (
					<ItemCard item={item} key={index} />
				))}
			</div>
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

	// Add videos to combinedItems
	if (item.videos) {
		item.videos.forEach((video) => {
			combinedItems.push({
				type: "video",
				item: video,
			});
		});
	}

	return (
		<Card
			className="d-inline-block"
			key={index}
			style={{
				maxWidth: "33%",
			}}
		>
			<Card.Body>
				<Card.Title>{item.title}</Card.Title>
				{item.date && <Card.Text>Date: {item.date}</Card.Text>}

				<div className="text-center" style={{ width: "100%" }}>
					<MediaCarousel entries={combinedItems} />
				</div>

				<Card.Text dangerouslySetInnerHTML={{ __html: item.description }} />

				<div>
					{item.links?.map((link, index) => (
						<Button
							key={index}
							href={link.url}
							rel="noreferrer noopener"
							target="_blank"
							variant="primary"
						>
							{link.name}
						</Button>
					))}

					{item.files?.map((file, index) => (
						<Button key={index} href={file.path} variant="warning">
							{file.name}
						</Button>
					))}
				</div>

				<ul className="card-footer text-muted fst-italic mb-0 pb-0 mt-1">
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
	// State variables to track max dimensions
	const [maxHeight, setMaxHeight] = useState(0);
	const [maxWidth, setMaxWidth] = useState(0);

	// Calculate max dimensions on mount or when entries change
	useEffect(() => {
		// Function to preload images and extract dimensions
		const preloadImages = async () => {
			let maxEntryHeight = 0;
			let maxEntryWidth = 0;

			// Loop through each entry to preload images and extract dimensions
			for (const entry of entries) {
				if (entry.type === "image") {
					const img = new Image();
					img.src = entry.item.url;
					await img.decode(); // Wait for the image to load and decode

					// Update max dimensions
					maxEntryHeight = Math.max(maxEntryHeight, img.height);
					maxEntryWidth = Math.max(maxEntryWidth, img.width);
				}
			}

			// Set max dimensions
			setMaxHeight(maxEntryHeight);
			setMaxWidth(maxEntryWidth);
		};

		preloadImages();
	}, [entries]);

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
