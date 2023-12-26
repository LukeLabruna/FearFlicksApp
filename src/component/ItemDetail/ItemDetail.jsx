import React from 'react'
import "./ItemDetail.css"
import AddFavorites from '../AddFavorites/AddFavorites'
import AddRoulette from '../AddRoulette/AddRoulette'

const ItemDetail = ({ movie }) => {
  return (
    <div className='itemDetail'>
      <h2>{movie.title}<span><AddFavorites movie={movie} /></span><span><AddRoulette movie={movie}/></span></h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster de la pelicula ${movie.title}`} />
      <p>{movie.overview}</p>
      <p>Fecha de lanzamiento: {movie.release_date}</p>
    </div>
  )
}

export default ItemDetail