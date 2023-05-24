import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
// import {faHeart} from ""
// aqui estoy declarando el componente

export const CharactersCard = (props) => { //aquí recibo las propiedades a través del objeto .props
    const {store,actions} = useContext(Context);
    const [result, setResult] = useState({});
  console.log(props.character)
    return(
        <div className="card card-view">
            <div>
                <img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/characters/"+props.character.uid+".jpg"}/>
                <div className="card-body">
                    <h5 className="card-title">{props.character.name}</h5><br></br>
                    <p className="card-text">Gender: {props.character.gender}</p>
                    <p className="card-text">Hair color: {props.character.haircolor}</p>
                    <p className="card-text">Eye-color: {props.character.eyecolor}</p>
                </div>
                <div className="d-flex justify-content-between">
                <Link to={"/single/"+props.character?.uid} className="btn-More btn btn-primary">Learn more!</Link>
                <button type="button" className="btn-Favorite btn btn-warning">Favorite</button>
                </div>
            </div>
        </div>
    );
};