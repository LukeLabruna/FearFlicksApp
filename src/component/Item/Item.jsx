import { Link } from "react-router-dom"
import "./Item.css"
import AddFavorites from "../AddFavorites/AddFavorites"

const Item = ({movie}) => {
  return (
    <article className="item">
      <h3>{movie.title} <span><AddFavorites movie={movie}/></span></h3>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster de la pelicula ${movie.title}`} />
      <p>Puntiacion: {movie.vote_average}/10</p>
      <Link to={`/pelicula/${movie.id}`}>Ver Detalle</Link>
    </article>
  )
}

export default Item