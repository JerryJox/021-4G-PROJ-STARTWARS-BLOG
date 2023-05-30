// https://www.swapi.tech/api/planets/

import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
// import {faHeart} from ""
// aqui estoy declarando el componente

export const PlanetsCard = (props) => { //aquí recibo las propiedades a través del objeto .props
    const {store,actions} = useContext(Context);
    const [result, setResult] = useState({});
  console.log(props.planet)
    return(
        <div className="card card-view">
            <div>
                <img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/planets/"+props.planet.uid+".jpg"}/>
                <div className="card-body">
                    <h5 className="card-title">{props.planet.name}</h5><br></br>
                    <p className="card-text">Population: {props.planet.population}</p>
                    <p className="card-text">Terrain: {props.planet.terrain}</p>
                </div>
                <div className="d-flex justify-content-between">
                <Link to={"/pla-details/"+props.planet?.uid} className="btn-More btn btn-primary">Learn more!</Link>
                <button type="button" className="btn-Favorite btn btn-warning">Favorite</button>
                </div>
            </div>
        </div>
    );
};