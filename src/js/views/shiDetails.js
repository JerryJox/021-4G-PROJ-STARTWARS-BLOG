import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { SingleShiCard } from "../component/singleShiCard";

export const ShiDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="body container-fluid">
			{/* <h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1> */}
			<SingleShiCard/>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
				
			</Link>
		</div>
	);
};

ShiDetails.propTypes = {
	match: PropTypes.object
};
