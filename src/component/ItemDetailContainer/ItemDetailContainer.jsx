import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODNjNTc1OGNmNGZjZGMxYjVhYmQ4Yjg3NjU2NTZmZiIsInN1YiI6IjY1NWU4NDQ5MWQzNTYzMDExYjljNDUyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FLQ_8lAvq1skoac8xvHVeZ-a52BN-VP3Zoe3VqPiIkc'
    }
  };

  useEffect(() => {
    async function fetchData() {
      await fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, options)
    .then(response => response.json())
    .then(response => setMovie(response))
    .catch(err => console.error(err));
    } 
    fetchData()
  }, [])
  
  

  return (
    <ItemDetail {...movie}/>
  )
}

export default ItemDetailContainer