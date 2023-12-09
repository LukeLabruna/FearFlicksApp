import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import "./Home.css"
import { optionsApi, fetchTopMovie, fetchNowPlaying } from "../../services/TMDBAPI";

const Home = () => {
  document.title = "FearFlicks | Home"

  const [bestMovie, setBestMovie] = useState([])
  const [newMovie, setNewMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      await fetch(fetchTopMovie, optionsApi)
        .then(response => response.json())
        .then(response => setBestMovie(response.results.slice(0, 5)))
        .catch(err => console.error(err));
    }
    fetchData()

  }, [])

  useEffect(() => {
    async function fetchData() {
      await fetch(fetchNowPlaying, optionsApi)
        .then(response => response.json())
        .then(response => setNewMovie(response.results.slice(0, 5)))
        .catch(err => console.error(err));
    }
    fetchData()

  }, [])


  return (
    <main className="home">
      <h1>FearFlicks</h1>
      <p>Sumérgete en el terror cinematográfico. Explora, califica y guarda tus películas de horror favoritas. Marca las que deseas ver, descubre las elecciones de otros aficionados y únete a una comunidad apasionada por el cine escalofriante.</p>
      <h2 >Top 5</h2>
      <ItemList movies={bestMovie} />
      <h2>En Cine</h2>
      <ItemList movies={newMovie} />
    </main>
  )
}

export default Home