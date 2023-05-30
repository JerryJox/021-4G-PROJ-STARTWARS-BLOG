import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { SinglePlaCard } from "../component/singlePlaCard";

export const PlaDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="body container-fluid">
			{/* <h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1> */}
			<SinglePlaCard/>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
				
			</Link>
		</div>
	);
};

PlaDetails.propTypes = {
	match: PropTypes.object
};
