import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Search.css"
import { useState, useEffect } from "react"
import { optionsApi, fetchSearchMovies } from "../../services/TMDBAPI"
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom"




const Search = () => {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState("")
  const [numberPage, setNumberPage] = useState(1)

  const handleOnChange = (e) => {
    const userInput = e.target.value;
    const formattedInput = userInput.toLowerCase().replace(/ /g, '%20');
    setQuery(formattedInput)
  }

  async function fetchData() {
    await fetch(fetchSearchMovies(query, numberPage), optionsApi)
      .then(response => response.json())
      .then(response => {
        setMovies(prevMovies => {
          const moviesFilter = response.results.filter(
            newMovie => !prevMovies.some(movie => movie.id === newMovie.id)
          );
          return [...prevMovies, ...moviesFilter];
        });
      })
      .catch(err => console.error(err));
  }

  console.log(movies)

  useEffect(() => {
    setNumberPage(1)
    setMovies([])
  }, [query])

  useEffect(() => {
    fetchData()
  }, [numberPage, query])

  return (
    <>
      <div className="barraBusqueda">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="Busqueda..." onChange={handleOnChange} />
      </div>
      
        <InfiniteScroll
          dataLength={movies.length}
          next={() => setNumberPage((prevPage) => prevPage + 1)}
          hasMore={true}
          className="resultados"
        >
          {movies.map((movie) => (
            <Link key={movie.id} to={`/pelicula/${movie.id}`} >  <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" /> </Link>
          ))}
        </InfiniteScroll>
      

    </>
  )
}

export default Search