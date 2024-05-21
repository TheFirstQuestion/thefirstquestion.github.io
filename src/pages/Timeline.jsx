import React, { useState, useEffect, useContext, useRef } from "react";
import { Button, Card, Carousel, ToggleButton } from "react-bootstrap";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import Isotope from "isotope-layout/js/isotope";
import classNames from "classnames";
import "../style/carousel.css";
import LinkNewTab from "../components/LinkNewTab";
import { LinksContext } from "../contexts/LinksContext";

const DEFAULT_TAGS = ["work experience"];

export default function Timeline({ props }) {
	// Constants
	const minWidth = 400;
	const maxWidth = 800;
	const margin = getRemInPixels();

	// Refs
	const isotope = useRef();
	const filterContainerRef = useRef();

	const { links } = useContext(LinksContext);

	const [data, setData] = useState([]);
	const [itemWidth, setItemWidth] = useState(0);
	const [newMargin, setNewMargin] = useState(margin);
	const [allTags, setAllTags] = useState(new Set());
	const [selectedOptions, setSelectedOptions] = useState(DEFAULT_TAGS);

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

					// Add the tags to the set of all tags
					item.tags.forEach((tag) => setAllTags((prev) => prev.add(tag)));
				});
				setData(data);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	// Initialize isotope, now that data is loaded
	useEffect(() => {
		if (data.length > 0) {
			// Isotope instance is created after the data has been populated to ensure elements exist in the DOM

			isotope.current = new Isotope(".filter-container", {
				itemSelector: ".filter-item",
				layoutMode: "masonry",
				masonry: {
					fitWidth: true,
				},
			});

			filterCards();

			// Clean up the isotope instance
			return () => {
				isotope.current.destroy();
			};
		}
	}, [data]);

	// Calculate the width of each column based on the container width
	useEffect(() => {
		const calculateItemWidth = () => {
			if (filterContainerRef.current) {
				const containerWidth = filterContainerRef.current.offsetWidth;
				// Calculate the largest number of columns that could fit in the container
				const numColumns = Math.floor(containerWidth / (minWidth + margin * 2));
				// Calculate the maximum width of each item, if there are that many columns
				const width = containerWidth / numColumns - numColumns * margin * 2;
				// Ensures the width is within the min and max bounds
				const adjustedWidth = Math.max(minWidth, Math.min(maxWidth, width));
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

	// Filter the items when the filters change, or when the margins are updated
	useEffect(filterCards, [itemWidth, selectedOptions, allTags]);

	function filterCards() {
		if (!isotope.current) return;

		// Comma is the OR operator
		const filterOn = "." + selectedOptions.map(tagToClassName).join(", .");

		if (filterOn === ".") {
			// If no tags are selected, show default tags
			setSelectedOptions([...DEFAULT_TAGS]);
		} else {
			isotope.current.arrange({
				filter: filterOn,
			});
		}
	}

	// Ensure that the filter key is updated when the selected options change
	function handleFilterChange(event) {
		const value = event.target.value;
		const newSelectedOptions = selectedOptions.includes(value)
			? selectedOptions.filter((option) => option !== value)
			: [...selectedOptions, value];
		setSelectedOptions(newSelectedOptions);
	}

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
				</Card.Body>

				<Card.Footer>
					<div className="d-flex flex-row px-3">
						<div className="d-flex flex-column">
							<Button
								variant="warning"
								size="sm"
								onClick={() => setSelectedOptions([...allTags])}
							>
								all
							</Button>

							<Button
								variant="warning"
								size="sm"
								onClick={() => setSelectedOptions(DEFAULT_TAGS)}
							>
								default
							</Button>

							<Button
								variant="warning"
								size="sm"
								onClick={() =>
									setSelectedOptions(
										[...allTags].filter(
											(item) => !selectedOptions.includes(item)
										)
									)
								}
							>
								invert
							</Button>
						</div>

						<div>
							{[...allTags]
								.sort((a, b) =>
									a.localeCompare(b, undefined, { sensitivity: "base" })
								)
								.map((option, index) => (
									<ToggleButton
										id={`btn-check-${index}`}
										type="checkbox"
										variant="outline-primary"
										size="sm"
										checked={selectedOptions.includes(option)}
										value={option}
										onChange={handleFilterChange}
										key={index}
										style={{ margin: "0.25rem" }}
									>
										{option}
									</ToggleButton>
								))}
						</div>
					</div>
				</Card.Footer>
			</Card>

			<div className="filter-container">
				{/* TODO: sort by date */}
				{data.map((item, index) => (
					<ItemCard
						item={item}
						index={index}
						key={index}
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
	item.photos?.forEach((photo) => {
		combinedItems.push({
			type: "image",
			item: photo,
		});
	});
	item.images?.forEach((photo) => {
		combinedItems.push({
			type: "image",
			item: photo,
		});
	});

	// Add videos to combinedItems
	item.videos?.forEach((video) => {
		combinedItems.push({
			type: "video",
			item: video,
		});
	});

	// The cards
	return (
		<Card
			className={classNames("filter-item", item.tags.map(tagToClassName))}
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
							size="sm"
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
							size="sm"
						>
							{file.name}
						</Button>
					))}
				</div>

				<ul className="card-footer small text-muted fst-italic mb-0 pb-0 mt-4">
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

// TODO: use Flickity? https://flickity.metafizzy.co/
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
function tagToClassName(tag) {
	return tag.split(" ").join("_").replace("'", "").replace("&", "");
}

function getRemInPixels() {
	// Get the computed font size of the root element
	const fontSize = getComputedStyle(document.documentElement).fontSize;
	// Convert the font size from a string to a number (e.g., "16px" -> 16)
	return parseFloat(fontSize);
}
