import React from "react";
import { Link as RRLink } from "react-router-dom";

// Wraps the react-router Link component to open in a new tab
export default function LinkNewTab({ to, children, ...props }) {
	return (
		<RRLink to={to} target="_blank" rel="noopener noreferrer" {...props}>
			{children}
		</RRLink>
	);
}
