import React, { useState, useEffect, useContext, useRef } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import Isotope from "isotope-layout/js/isotope";
import classNames from "classnames";
import "../style/carousel.css";
import LinkNewTab from "../components/LinkNewTab";
import { LinksContext } from "../contexts/LinksContext";

export default function Timeline({ props }) {
	const { links } = useContext(LinksContext);
	const [data, setData] = useState([]);
	const isotope = useRef();
	const filterContainerRef = useRef();
	const [filterKey, setFilterKey] = useState("*");
	const [itemWidth, setItemWidth] = useState(0);
	const minWidth = 400;
	const maxWidth = 800;
	const margin = getRemInPixels();
	const [newMargin, setNewMargin] = useState(margin);

	// Calculate the width of each column based on the container width
	useEffect(() => {
		const calculateItemWidth = () => {
			if (filterContainerRef.current) {
				const containerWidth = filterContainerRef.current.offsetWidth;
				console.log("containerWidth", containerWidth);
				// Calculate the largest number of columns that could fit in the container
				const numColumns = Math.floor(containerWidth / (minWidth + margin * 2));
				console.log("numColumns", numColumns);
				// Calculate the maximum width of each item, if there are that many columns
				const width = containerWidth / numColumns - numColumns * margin * 2;
				console.log("width", width);
				// Ensures the width is within the min and max bounds
				const adjustedWidth = Math.max(minWidth, Math.min(maxWidth, width));
				console.log("adjustedWidth", adjustedWidth);
				// Recalculate margin to center the items perfectly
				const newMargin =
					(containerWidth - numColumns * adjustedWidth) / (numColumns * 2);
				setNewMargin(newMargin);
				setItemWidth(adjustedWidth);
			}
		};

		const handleResize = () => {
			calculateItemWidth();
		};

		window.addEventListener("resize", handleResize);
		calculateItemWidth();

		// Cleanup event listener
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [margin]);

	// Fetch the data from the JSON file
	useEffect(() => {
		fetch("/timeline_data.json")
			.then((response) => response.json())
			.then((data) => {
				console.log("fetching data");
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

	// Isotope instance is created after the data has been populated to ensure elements exist in the DOM
	useEffect(() => {
		if (data.length > 0) {
			isotope.current = new Isotope(".filter-container", {
				itemSelector: ".filter-item",
				layoutMode: "masonry",
				masonry: {
					fitWidth: true,
				},
			});
		}
	}, [data]);

	useEffect(() => {
		if (!isotope.current) return;

		filterKey === "*"
			? isotope.current.arrange({ filter: `*` })
			: isotope.current.arrange({ filter: `.${filterKey}` });
	}, [filterKey, itemWidth]);

	const handleFilterKeyChange = (key) => () => setFilterKey(key);

	if (!data) {
		return <></>;
	}

	return (
		<>
			<Card
				className="border border-dark rounded text-center"
				ref={filterContainerRef}
			>
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
					<ul>
						<li onClick={handleFilterKeyChange("*")}>Show Both</li>
						<li onClick={handleFilterKeyChange("papers")}>papers</li>
						<li onClick={handleFilterKeyChange("music")}>Show music</li>
					</ul>
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

			<div className="filter-container">
				{data.map((item, index) => (
					<ItemCard
						item={item}
						index={index}
						style={{
							width: itemWidth,
							margin: `${newMargin}px`,
						}}
					/>
				))}
			</div>
		</>
	);
}

const ItemCard = ({ item, index, style }) => {
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
		<Card
			// TODO: deal with spaces in tag names
			className={classNames("filter-item", item.tags)}
			key={index}
			style={style}
		>
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

/* ########################### Helper Functions ########################## */
function tagToClass(tag) {
	return tag.split(" ").join("_");
}

function classToTag(name) {
	return name.split("_").join(" ");
}

function getRemInPixels() {
	// Get the computed font size of the root element
	const fontSize = getComputedStyle(document.documentElement).fontSize;
	// Convert the font size from a string to a number (e.g., "16px" -> 16)
	return parseFloat(fontSize);
}
