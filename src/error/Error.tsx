import React from "react";
import { useNavigate } from "react-router";

const Error = () => {
	const navigate = useNavigate();
	const goDashboard = () => {
		navigate("/admin");
	};
	const goClient = () => {
		navigate("/client");
	};
	const goAgent = () => {
		navigate("/agent")
	}

	return (
		<div>
			<button onClick={goDashboard}> Go To Dashboard</button> <br />
			<button onClick={goClient}> Go To Client Web View</button><br />
			<button onClick={goAgent}>Go to Agent Web View</button>
		</div>
	);
};

export default Error;
