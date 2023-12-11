import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { optionsApi, fetchMovies } from "../../services/TMDBAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [movies, setMovies] = useState([])
  const [numberPage, setNumberPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const { decada } = useParams()

useEffect(() => {
  async function fetchData() {
    await fetch(fetchMovies(decada, numberPage), optionsApi)
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

window.onscroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop ===
    document.documentElement.offsetHeight
  ) {
    setLoading(true)
    async function fetchData() {
      await fetch(fetchMovies(decada, numberPage), optionsApi)
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
  }
};
        

  return (
    <>
      <h1>Terror de los '<span className="decada">{decada.slice(-2)}</span></h1>
      <ItemList  movies={movies}/>
      {loading && <p>Cargando <FontAwesomeIcon icon={faSpinner} spinPulse className="loading"/></p>}  
    </>
  )
}

export default ItemListContainer