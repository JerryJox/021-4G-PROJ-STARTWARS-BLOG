import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const SingleChaCard = (props) => { //aquí recibo las propiedades a través del objeto .props
    const {store,actions} = useContext(Context);
    const [result, setResult] = useState({});
     return(
        <div className="bodySimpleCard row">
            <div className="col-md-auto imgBox">
                <img className="card-img-top singleImg" src={"https://starwars-visualguide.com/assets/img/characters/1.jpg"} style={{ height: "100%"}}/>
                {/* "+props.uid+" */}
            </div>
            <div className="col-md textBox">
                <div className="card single-card-descript">
                    <h1>personajes</h1>
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
                    
                </div>
            </div>

 {/* <img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/characters/"+props.character.uid+".jpg"}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.character.name}</h5><br></br>
                        <p className="card-text">Gender: {props.character.gender}</p>
                        <p className="card-text">Hair color: {props.character.haircolor}</p>
                        <p className="card-text">Eye-color: {props.character.eyecolor}</p>
                    </div> */}

        </div>
    );
};