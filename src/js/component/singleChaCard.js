import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
// import { Link } from "react-router-dom";

export const SingleChaCard = (props) => { //aquí recibo las propiedades a través del objeto .props
    const {store,actions} = useContext(Context);
    const [result, setResult] = useState({});
    console.log(props.character)
     return(
        <div className="bodySimpleCard row">
            <div className="col-md-auto imgBox">
                <img className="card-img-top singleImg" src={"https://starwars-visualguide.com/assets/img/characters/1.jpg"} style={{ height: "100%"}}/>
                {/* "+props.uid+" */}
            </div>
            <div className="col-md textBox">
                <div className="card single-card-descript">
                    <h1 className="card-title">{props.character.name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus odio obcaecati
                        blanditiis consectetur sed, amet veritatis incidunt quasi saepe deserunt dolorum 
                        alias, officia error voluptatem consequuntur tempora natus hic. Molestiae aut tempora, 
                        placeat id non, eius aspernatur et saepe neque labore recusandae ad itaque provident 
                        amet dicta, quaerat autem consectetur obcaecati officia asperiores? Porro, corporis 
                        aliquid corrupti maxime dicta, debitis eius veritatis aspernatur est at a voluptatum 
                        quae quisquam earum reprehenderit officiis hic suscipit aperiam asperiores eligendi 
                        officia quod.</p>
                </div>
            </div>
            <div>
                <div>
                    <p className="card-text">Name:</p>
                    <p>{props.character.name}</p>
                </div>
                <div>
                    <p className="card-text">Birth Year</p>
                    <p>{props.character.birth_year}</p>
                </div>
                <div>
                    <p className="card-text">Gender</p>
                    <p>{props.character.gender}</p>
                </div>
                <div>
                    <p className="card-text">Height</p>
                    <p>{props.character.height}</p>
                </div>
                <div>
                    <p className="card-text">Skin Color</p>
                    <p>{props.character.skin_color}</p>
                </div>
                <div>
                    <p className="card-text">Eye Color</p>
                    <p>{props.character.eye_color}</p>
                </div>
            </div>
        </div>
    );
};