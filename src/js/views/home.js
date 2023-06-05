import React, { useContext, useEffect } from "react"; //importar HOOK useContext
import { Context } from "../store/appContext"; //importar Context
import "../../styles/home.css";
import { CardCharacters } from "../component/cardCharacters.js";
import { CardPlanets } from "../component/cardPlanets.js";
import { CardStarships } from "../component/cardStarships";

export const Home = () => {
  //!!debo llamar el array de objetos de characters "store.characters"

  const { store, actions } = useContext(Context); //consumir el contexto

  useEffect(() => {
    actions.fetchCharacters();
  }, []);

  useEffect(() => {
    actions.fetchPlanets();
  }, []);

  useEffect(() => {
    actions.fetchStarships();
  }, []);

  return (
    <div className="body container-fluid">
      <h1 className="h1">Characters</h1>
      <div className="d-flex flex-row flex-nowrap">
        <div id="card-view" className="d-flex overflow-auto custom-scroll">
          {/* aquí corresponde el mapeado de store.character para
							que me dibuje una card cada vez que itere */}
          {store.characters?.map((character,index) => (
            <CardCharacters character={character} key={index} uid={index+1}/>
          ))}
        </div>
      </div>
      <h1 className="h1">Planets</h1>
      <div className="d-flex flex-row flex-nowrap">
        <div id="card-view" className="d-flex overflow-auto custom-scroll">
          {store.planets?.map((planet,index) => (
            <CardPlanets planet={planet} key={index} uid={planet+1}/>
          ))}
        </div>
      </div>
      <h1 className="h1">Starships</h1>
      <div className="d-flex flex-row flex-nowrap">
        <div id="card-view" className="d-flex overflow-auto custom-scroll">
          {/* aquí corresponde el mapeado de store.character para
							que me dibuje una card cada vez que itere */}
          {store.starships?.map((starship,index) => (
            <CardStarships starship={starship} key={index} uid={starship+1}/>
          ))}
        </div>
      </div>
    </div>
  );
};

// import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";

// export const Home = () => (
// 	<div className="text-center mt-5">
// 		<h1>Hello Rigo!</h1>
// 		<p>
// 			<img src={rigoImage} />
// 		</p>
// 		<a href="#" className="btn btn-success">
// 			If you see this green button, bootstrap is working
// 		</a>
// 	</div>
// );




{/* <div className="d-flex flex-row flex-nowrap">
<div id="card-view" className="d-flex overflow-auto custom-scroll">
  {store.planets?.map((planet) => (
    <CardPlanets planet={planet} key={planet.uid} />
  ))}
</div>
</div>
<h1 className="h1">Starships</h1>
<div className="d-flex flex-row flex-nowrap">
<div id="card-view" className="d-flex overflow-auto custom-scroll">
  // {/* aquí corresponde el mapeado de store.character para
  //     que me dibuje una card cada vez que itere 
  {store.starships?.map((starship) => (
    <CardStarships starship={starship} key={starship.uid} />
  ))}
</div>
</div> */}