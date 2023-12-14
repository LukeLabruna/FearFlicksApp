import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Search.css"
import { useState, useEffect } from "react"
import { optionsApi, fetchSearchMovies } from "../../services/TMDBAPI"



const Search = () => {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState("")
  const [numberPage, setNumberPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const handleOnChange = (e) => {
    const userInput = e.target.value;
    const formattedInput = userInput.toLowerCase().replace(/ /g, '%20');
    setQuery(formattedInput)
  }

  useEffect(() => {
    async function fetchData() {
    
      await fetch(fetchSearchMovies(query, numberPage), optionsApi)
        .then(response => response.json())
        .then(response => {
          const movieFilter = response.results.filter(movie => movie.genre_ids.includes(27));
          setMovies(movieFilter);
          setLoading(false)
        })
        .catch(err => console.error(err));
    }
    fetchData()
  }, [query])

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
      return;
    }

    setLoading(true)
    async function fetchData() {
      await fetch(fetchSearchMovies(query, numberPage), optionsApi)
        .then(response => response.json())
        .then(response => {
          const movieFilter = response.results.filter(movie => movie.genre_ids.includes(27));
          setMovies((prevMovies) => [...prevMovies, ...movieFilter]);
          setNumberPage((prevPage) => prevPage + 1)
          setLoading(false)
        })
        .catch(err => console.error(err));
    }
    fetchData()


  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <>
    <div className="barraBusqueda">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" placeholder="Busqueda..." onChange={handleOnChange}/>
    </div>
    <div>
      {movies.map((movie) => (
        <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
      ))}
    </div>
    </>
  )
}

export default Search