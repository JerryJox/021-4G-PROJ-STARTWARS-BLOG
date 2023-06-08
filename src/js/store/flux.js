const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: null,
      planets: null,
      starships: null,
      infoPersonaje: null,
      infoPlaneta: null,
      infoNave: null,
      test: null,
    },
    actions: {
      fetchCharacters: () => {
        fetch("https://swapi.dev/api/people/")
          .then((res) => res.json())
          .then((data) => setStore({ characters: data.results }))
          .then((error) => console.log(error));
      },
      fetchPlanets: () => {
        fetch("https://swapi.dev/api/planets/")
          .then((res) => res.json())
          .then((data) => setStore({ planets: data.results }))
          .then((error) => console.log(error));
      },
      fetchStarships: () => {
        fetch("https://swapi.dev/api/starships/")
          .then((res) => res.json())
          .then((data) => setStore({ starships: data.results }))
          .then((error) => console.log(error));
      },
      fetchInfoPersonaje: (uid) => {
        fetch("https://swapi.dev/api/people/" + uid)
          .then((res) => res.json())
          .then((data) => setStore({ infoPersonaje: data }))
          // .then(data => console.log(data))
          .then((error) => console.log(error));
      },
      fetchInfoPlaneta: (uid) => {
        fetch("https://swapi.dev/api/planets/" + uid + "/")
          .then((res) => res.json())
          .then((data) => setStore({ infoPlaneta: data }))
          // .then(data => console.log(data))
          .then((error) => console.log(error));
      },
      fetchInfoNave: (uid) => {
        fetch("https://swapi.dev/api/starships/" + uid + "/")
          .then((res) => res.json())
          .then((data) => setStore({ infoNave: data }))
          // .then((data) => console.log(data))
          .then((error) => console.log(error));
      },
    },
  };
};

export default getState;
