import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { optionsApi, fetchMovieById } from "../../services/TMDBAPI";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      await fetch(fetchMovieById(id), optionsApi)
    .then(response => response.json())
    .then(response => setMovie(response))
    .catch(err => console.error(err));
    } 
    fetchData()
  }, [id])
 
  return (
    <ItemDetail {...movie}/>
  )
}

export default ItemDetailContainer