import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardCharacters = (props) => {
  //aquí recibo las propiedades a través del objeto .props
  const { store, actions } = useContext(Context);
  const [result, setResult] = useState({});
  //   console.log(props.character)
  return (
    <div className="card card-view">
      <div>
        <img
          className="card-img-top"
          src={
            "https://starwars-visualguide.com/assets/img/characters/" +
            props.uid +
            ".jpg"
          }
          alt="https://starwars-visualguide.com/assets/img/placeholder.jpg"
        />
        <div className="card-body">
          <h5 className="card-title">{props.character.name}</h5>
          <br></br>
          <p className="card-text">Gender: {props.character.gender}</p>
          <p className="card-text">Hair color: {props.character.hair_color}</p>
          <p className="card-text">Eye-color: {props.character.eye_color}</p>
        </div>
        <div className="d-flex justify-content-between">
          <Link
            to={"/char-details/" + props.uid}
            className="btn-More btn btn-primary"
          >
            Learn more!
          </Link>
          <button type="button" className="btn-Favorite btn btn-warning">
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};
