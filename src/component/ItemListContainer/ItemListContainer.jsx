import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { optionsApi, fetchMovies, fetchTopMovie, fetchNowPlaying } from "../../services/TMDBAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [movies, setMovies] = useState([])
  const [numberPage, setNumberPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const { decada } = useParams()
  const { pathname } = useLocation()

  useEffect(() => {
    async function fetchData() {
      const fetchCondicional = decada
        ? fetchMovies(decada, numberPage)
        : (pathname === "/top"
          ? fetchTopMovie(numberPage)
          : fetchNowPlaying(numberPage))

      await fetch(fetchCondicional, optionsApi)
        .then(response => response.json())
        .then(response => {
          const movieFilter = response.results.filter(movie => movie.overview.trim() !== "");
          setMovies(movieFilter);
          setNumberPage((prevPage) => prevPage + 1)
          setLoading(false)
        })
        .catch(err => console.error(err));
    }
    fetchData()
  }, [decada])


  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
      return;
    }

    setLoading(true)
    async function fetchData() {
      const fetchCondicional = decada
        ? fetchMovies(decada, numberPage)
        : (pathname === "/top"
          ? fetchTopMovie(numberPage)
          : fetchNowPlaying(numberPage))


      await fetch(fetchCondicional, optionsApi)
        .then(response => response.json())
        .then(response => {
          const movieFilter = response.results.filter(movie => movie.overview.trim() !== "");
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


 const fecha = new Date()
console.log(fecha)

  return (
    <>
      {decada
        ? <h1>Terror de los '<span className="decada">{decada.slice(-2)}</span></h1>
        : <h2>{pathname.slice(1)}</h2>
      }
      <ItemList movies={movies} />
      {loading && <p>Cargando <FontAwesomeIcon icon={faSpinner} spinPulse className="loading" /></p>}
    </>
  )
}

export default ItemListContainer