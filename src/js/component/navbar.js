import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar nav navbar-light mb-3 fixed-top">

{/* - 	IMAGEN CAÍDA */}

			<img src="https://cdn.worldvectorlogo.com/logos/star-wars-2.svg" width="auto" height="60px" className="d-inline-block align-top" alt=""></img>
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>

{/* -	AÑADIR CÓDIGO TODOLIST
	-	CAMBIAR ICONO PAPELERA
	-	MODIFICAR ESTADO ASOCIADO AL BOTÓN FAVORITO DE LAS CARD */}
	
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">Action</a></li>
					<li><a className="dropdown-item" href="#">Another action</a></li>
					<li><a className="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
		</nav>
	);
};

