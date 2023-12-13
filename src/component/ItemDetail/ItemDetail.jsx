import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({title, overview, release_date, poster_path}) => {
  return (
    <div className='itemDetail'>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`Poster de la pelicula ${title}`} />
      <p>{overview}</p>
      <p>Fecha de lanzamiento: {release_date}</p>
    </div>
  )
}

export default ItemDetail