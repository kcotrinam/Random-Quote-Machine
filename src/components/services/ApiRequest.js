const requestJoke = async (setJoke) => {
  const url = "https://api.chucknorris.io/jokes/random";
  const response = await fetch(url);
  const json = await response.json();
  
  setJoke(json.value);
}

    export default requestJoke;