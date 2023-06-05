import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const SinglePlaCard = () => { //aquí recibo las propiedades a través del objeto .props
    const {store,actions} = useContext(Context);
    const [result, setResult] = useState({});
    const params = useParams();
    
    useEffect(()=>{ 
        actions.fetchInfoPlaneta(params.theid) //useParams
        },[])
    
        console.log(store.infoPlaneta?.name)

        return(
        <div className="bodySimpleCard row">
            <div className="col-md-auto imgBox">
                <img className="card-img-top singleImg" src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`} style={{ height: "100%"}}/>
            </div>
            <div className="col-md textBox">
                <div className="card single-card-descript">
                    <h1 className="card-title">{store.infoPlaneta?.name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus odio obcaecati
                        blanditiis consectetur sed, amet veritatis incidunt quasi saepe deserunt dolorum 
                        alias, officia error voluptatem consequuntur tempora natus hic. Molestiae aut tempora, 
                        placeat id non, eius aspernatur et saepe neque labore recusandae ad itaque provident 
                        amet dicta, quaerat autem consectetur obcaecati officia asperiores? Porro, corporis 
                        aliquid corrupti maxime dicta.</p>
                </div>
            </div>
            <div className="hrx"></div>
            <div className="featuresBar">
                <div>
                    <p className="card-text">Diameter</p>
                    <p>{store.infoPlaneta?.diameter}</p>
                </div>
                <div>
                    <p className="card-text">Rotation<br></br>period</p>
                    <p>{store.infoPlaneta?.rotation_period}</p>
                </div>
                <div>
                    <p className="card-text">Orbital<br></br>Period</p>
                    <p>{store.infoPlaneta?.orbital_period}</p>
                </div>
                <div>
                    <p className="card-text">Gravity</p>
                    <p>{store.infoPlaneta?.gravity}</p>
                </div>
                <div>
                    <p className="card-text">Population</p>
                    <p>{store.infoPlaneta?.population}</p>
                </div>
                <div>
                    <p className="card-text">Climate</p>
                    <p>{store.infoPlaneta?.climate}</p>
                </div>
            </div> 
        </div>
    );
};