import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const SingleChaCard = (props) => { //aquí recibo las propiedades a través del objeto .props
    const {store,actions} = useContext(Context);
    const [result, setResult] = useState({});
  console.log(props.character)
    return(
        <div className="body">
            <div className="card single-card-view">
                <div>
                    <h1>podsrsjpseojdfñaeo</h1>
                    {/* <img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/characters/"+props.character.uid+".jpg"}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.character.name}</h5><br></br>
                        <p className="card-text">Gender: {props.character.gender}</p>
                        <p className="card-text">Hair color: {props.character.haircolor}</p>
                        <p className="card-text">Eye-color: {props.character.eyecolor}</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};