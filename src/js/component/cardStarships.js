// https://www.swapi.tech/api/starships/

import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
// import {faHeart} from ""
// aqui estoy declarando el componente

export const CardStarships = (props) => { //aquí recibo las propiedades a través del objeto .props
    const {store,actions} = useContext(Context);
    const [result, setResult] = useState({});
//   console.log(props.starship)
    return(
        <div className="card card-view">
            <div>
                <img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/starships/"+props.starship.uid+".jpg"}/>
                <div className="card-body">
                    <h5 className="card-title">{props.starship.name}</h5><br></br>
                    <p className="card-text">Length: {props.starship.length}</p>
                    <p className="card-text">Crew: {props.starship.crew}</p>
                </div>
                <div className="d-flex justify-content-between">
                <Link to={"/shi-details/"+props.starship?.uid} className="btn-More btn btn-primary">Learn more!</Link>
                <button type="button" className="btn-Favorite btn btn-warning">Favorite</button>
                </div>
            </div>
        </div>
    );
};