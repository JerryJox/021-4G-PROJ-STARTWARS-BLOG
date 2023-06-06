import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const SingleShiCard = () => {
  //aquí recibo las propiedades a través del objeto .props
  const { store, actions } = useContext(Context);
  const [result, setResult] = useState({});
  const params = useParams();

  useEffect(() => {
    actions.fetchInfoNave(params.theid); //useParams
  }, []);

  console.log(store.infoNave?.name);

  return (
    <div className="bodySimpleCard row">
      <div className="col-md-auto imgBox">
        <img
          className="card-img-top singleImg"
          src={`https://starwars-visualguide.com/assets/img/starships/${params.theid}.jpg`}
          style={{ height: "100%" }}
        />
      </div>
      <div className="col-md textBox">
        <div className="card single-card-descript">
          <h1 className="card-title">{store.infoNave?.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus
            odio obcaecati blanditiis consectetur sed, amet veritatis incidunt
            quasi saepe deserunt dolorum alias.
          </p>
        </div>
      </div>
      <div className="hrx"></div>
      <div className="featuresBar">
        <div>
          <p className="card-text">Model</p>
          <p>{store.infoNave?.model}</p>
        </div>
        <div>
          <p className="card-text">
            Starship<br></br>class
          </p>
          <p>{store.infoNave?.starship_class}</p>
        </div>
        <div>
          <p className="card-text">Manufacturer</p>
          <p>{store.infoNave?.manufacturer}</p>
        </div>
        <div>
          <p className="card-text">
            Cost in<br></br>credits
          </p>
          <p>{store.infoNave?.cost_in_credits}</p>
        </div>
        <div>
          <p className="card-text">Length</p>
          <p>{store.infoNave?.length}</p>
        </div>
        <div>
          <p className="card-text">Crew</p>
          <p>{store.infoNave?.crew}</p>
        </div>
      </div>
    </div>
  );
};
