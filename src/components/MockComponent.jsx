import { useEffect, useState } from "react";
import NextJokeBtn from "./NextBtn";
import requestJoke from "./services/ApiRequest";

const Joke = () => {
  const [joke, setJoke] = useState('')
  useEffect(() => {
    requestJoke(setJoke)
  }, [])

  const nextJoke = () => {
    requestJoke(setJoke)
  }

  return(
    <>
      <div className="container">
        <div className="joke-container">{joke}</div>
      </div>
      <div className="button-container">
        <NextJokeBtn clickHandler={nextJoke}/>
      </div>
    </>
  )
}

export default Joke;