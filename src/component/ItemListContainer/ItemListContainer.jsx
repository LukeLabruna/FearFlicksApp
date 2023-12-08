import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { optionsApi, fetchMovies } from "../../services/TMDBAPI";

const ItemListContainer = () => {
  const [movies, setMovies] = useState([])

  const { numberPage } = useParams()
  const { decada } = useParams()

  const pages = Array.from({ length: 20 }, (_, index) => index + 1);

useEffect(() => {
  async function fetchData() {
    await fetch(fetchMovies(decada, numberPage), optionsApi)
      .then(response => response.json())
      .then(response => {
        const movieFilter = response.results.filter(movie => movie.overview.trim() !== "");
        setMovies(movieFilter);
      })
      .catch(err => console.error(err));
  }
  fetchData()
}, [numberPage])
  
  return (
    <>
      <h1>Peliculas de terror</h1>
      <ItemList  movies={movies}/>
      <hr />
      {
        
          pages.map((page) => (
            <Link key={page} to={`/decada/${decada}/pagina/${page}`} ><button>{page}</button></Link> 
          ))
          
      }
    </>
  )
}

export default ItemListContainer