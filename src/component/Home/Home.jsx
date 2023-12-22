import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import "./Home.css"
import { optionsApi, fetchTopMovie, fetchNowPlaying } from "../../services/TMDBAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  document.title = "FearFlicks | Home"

  const [bestMovie, setBestMovie] = useState([])
  const [newMovie, setNewMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      await fetch(fetchTopMovie(), optionsApi)
        .then(response => response.json())
        .then(response => setBestMovie(response.results.slice(0, 5)))
        .catch(err => console.error(err));
    }
    fetchData()

  }, [])

  useEffect(() => {
    async function fetchData() {
      await fetch(fetchNowPlaying(), optionsApi)
        .then(response => response.json())
        .then(response => setNewMovie(response.results.slice(0, 5)))
        .catch(err => console.error(err));
    }
    fetchData()

  }, [])


  return (
    <main className="home">
      <div className="presentacion">
        <h1>FearFlicks</h1>
        <p>Sumérgete en el terror cinematográfico. Explora y guarda tus películas de horror favoritas. Experimenta noches sorprendentes con nuestra ruleta única y vive el miedo de una manera inigualable. Únete a una comunidad apasionada por el cine escalofriante.</p>
        <FontAwesomeIcon icon={faAngleDown} />     
      </div>
      <Link to={"/top"}><h2 >Top<span style={{fontSize: "0.8rem"}}><FontAwesomeIcon icon={faPlus} /></span></h2></Link>
      <ItemList movies={bestMovie} />
      <Link to={"/estrenos"}><h2 >Estrenos<span style={{fontSize: "0.8rem"}}><FontAwesomeIcon icon={faPlus} /></span></h2></Link>
      <ItemList movies={newMovie} />
    </main>
  )
}

export default Home