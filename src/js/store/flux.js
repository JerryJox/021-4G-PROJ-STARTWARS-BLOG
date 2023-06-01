const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: null,
			planets: null,
			starships: null,
			infoPersonaje: null
		},
		actions: {
			fetchStarships: () =>{ 
				fetch("https://www.swapi.tech/api/starships/")
				.then(res => res.json())
				.then(data => setStore({starships: data.results }))
				.then(error => console.log(error));
		},
			fetchCharacters: () =>{ 
				fetch("https://swapi.dev/api/people/")
				.then(res => res.json())
				.then(data => setStore({characters: data.results }))
				.then(error => console.log(error));
		},
			fetchPlanets: () =>{ 
				fetch("https://www.swapi.tech/api/planets/")
				.then(res => res.json())
				.then(data => setStore({planets: data.results }))
				.then(error => console.log(error));
		},

		fetchInfoPersonaje: (uid) =>{ 
			fetch("https://swapi.dev/api/people/"+uid)
			.then(res => res.json())
			.then(data => setStore({infoPersonaje: data }))
			// .then(data => console.log(data))
			.then(error => console.log(error));
		},


		}
	}
};

export default getState;
