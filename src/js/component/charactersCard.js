import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
// import {faHeart} from ""
// aqui estoy declarando el componente

export const CharactersCard = (props) => { //aquí recibo las propiedades a través del objeto .props
    const {store,actions} = useContext(Context);
    const [result, setResult] = useState({});
  
    return(
        <div className="card card-view">
            <div>
                <img className="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536" alt="kk" />
                <div className="card-body">
                    <h5 className="card-title">{props.character.name}</h5><br></br>
                    <p className="card-text">Gender: {props.character.gender}</p>
                    <p className="card-text">Hair color: {props.character.haircolor}</p>
                    <p className="card-text">Eye-color: {props.character.eyecolor}</p>
                </div>
                <div>
                <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-warning">Warning</button>
                </div>
            </div>
        </div>
    );
};