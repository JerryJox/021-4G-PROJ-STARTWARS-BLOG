import React, {useContext, useEffect} from "react"; //importar HOOK useContext
import { Context } from "../store/appContext"; //importar Context
import "../../styles/home.css";
import { CharactersCard } from "../component/charactersCard.js";

export const Home = () => {

	//!!debo llamar el array de objetos de characters "store.characters"
	
	const {store,actions} = useContext(Context); //consumir el contexto

	useEffect (() => {
		actions.fetchCharacters();
    }, []);

	return( 
		<div className="container">
			<div className="row flex-nowrap">
				<h1 className="h1">Characters</h1>
				<div id="card-view" className="d-flex overflow-auto">
					{/* aquí corresponde el mapeado de store.character para
							que me dibuje una card cada vez que itere */}
					{store.characters?.map((character) => (
						<CharactersCard 
						character={character}
						// key={character.id} character={character}
						 />
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
