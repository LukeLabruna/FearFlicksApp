import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(undefined)
  const [pages, setPages] = useState(undefined)
  
  const { numberPage } = useParams()
  const { decada } = useParams()

  const accesTokenAuth = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODNjNTc1OGNmNGZjZGMxYjVhYmQ4Yjg3NjU2NTZmZiIsInN1YiI6IjY1NWU4NDQ5MWQzNTYzMDExYjljNDUyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FLQ_8lAvq1skoac8xvHVeZ-a52BN-VP3Zoe3VqPiIkc";
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accesTokenAuth}`
    }
  };

useEffect(() => {
  async function fetchData() {
    await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=27&sort_by=popularity.desc&include_adult=false&language=es-ES&primary_release_date.gte=${decada}-01-01&primary_release_date.lte=${parseInt(decada) + 9}-12-31&page=${numberPage}&without_genres=16`, options)
      .then(response => response.json())
      .then(response => {
        const movieFilter = response.results.filter(movie => movie.overview.trim() !== "");
        setMovies(movieFilter);
        setPages(response.total_pages)
        
      })
      .catch(err => console.error(err));
  }
  fetchData()
}, [numberPage])
  
useEffect(() => {
  const nuevoArreglo = [];
  for (let i = 1; i <= pages; i++) {
    nuevoArreglo.push(i);
  }
  setPage(nuevoArreglo);
}, [pages])


  return (
    <>
      <h1>Peliculas de terror</h1>
      <ItemList  movies={movies}/>
      <hr />
      {
        page && page.length > 0 
          ? (page.slice(0, 20).map((page) => (
            <Link key={page} to={`/decada/${decada}/pagina/${page}`} ><button>{page}</button></Link> 
          )))
          : <p>0</p>
      }
    </>
  )
}

export default ItemListContainer