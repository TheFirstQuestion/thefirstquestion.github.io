import React, { createContext, useState } from "react";

// Create a context
const LinksContext = createContext();

// Create a provider component
const LinksProvider = ({ children }) => {
	// State to hold the links
	const [links, setLinks] = useState({
		email:
			"mailto:steven.g.opferman@gmail.com?subject=Your%20Website%20Sent%20Me!&body=hehe%2C%20Steven%20knows%20how%20to%20generate%20fancy%20mailto%20links!%20%F0%9F%98%8E",
		github: "https://github.com/TheFirstQuestion",
		linkedin: "https://www.linkedin.com/in/sopferman",
		resume: "/files/Steven Opferman - Resume.pdf",
	});

	return (
		<LinksContext.Provider value={{ links }}>{children}</LinksContext.Provider>
	);
};

export default LinksContext;
export { LinksProvider, LinksContext };
