const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: null,
			planets: null,
			starships: null
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

		// store: {
		// 	demo: [
		// 		{
		// 			title: "FIRST",
		// 			background: "white",
		// 			initial: "white"
		// 		},
		// 		{
		// 			title: "SECOND",
		// 			background: "white",
		// 			initial: "white"
		// 		}
		// 	]
		// },
		// actions: {
		// 	// Use getActions to call a function within a fuction
		// 	exampleFunction: () => {
		// 		getActions().changeColor(0, "green");
		// 	},
		// 	loadSomeData: () => {
		// 		/**
		// 			fetch().then().then(data => setStore({ "foo": data.bar }))
		// 		*/
		// 	},
		// 	changeColor: (index, color) => {
		// 		//get the store
		// 		const store = getStore();

		// 		//we have to loop the entire demo array to look for the respective index
		// 		//and change its color
		// 		const demo = store.demo.map((elm, i) => {
		// 			if (i === index) elm.background = color;
		// 			return elm;
		// 		});

		// 		//reset the global store
		// 		setStore({ demo: demo });
			}
		}
	}
};

export default getState;
