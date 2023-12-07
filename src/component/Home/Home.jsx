import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import "./Home.css"

const Home = () => {
  document.title = "FearFlicks | Home"

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODNjNTc1OGNmNGZjZGMxYjVhYmQ4Yjg3NjU2NTZmZiIsInN1YiI6IjY1NWU4NDQ5MWQzNTYzMDExYjljNDUyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FLQ_8lAvq1skoac8xvHVeZ-a52BN-VP3Zoe3VqPiIkc'
    }
  };

  const [bestMovie, setBestMovie] = useState([])
  const [newMovie, setNewMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=vote_average.desc&vote_count.gte=3000&with_genres=27&without_genres=16', options)
        .then(response => response.json())
        .then(response => setBestMovie(response.results.slice(0, 5)))
        .catch(err => console.error(err));
    }
    fetchData()

  }, [])

  useEffect(() => {
    async function fetchData() {
      await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&with_genres=27&sort_by=release_date.desc&vote_count.gte=1000&without_genres=16', options)
        .then(response => response.json())
        .then(response => setNewMovie(response.results.slice(0, 5)))
        .catch(err => console.error(err));
    }
    fetchData()

  }, [])
  console.log(bestMovie)


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