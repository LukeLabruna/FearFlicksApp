import { Link } from "react-router-dom"
import "./Item.css"
import AddFavorites from "../AddFavorites/AddFavorites"
import AddRoulette from "../AddRoulette/AddRoulette"

const Item = ({ movie }) => {
  return (
    <article className="item">
      <h3>{movie.title} <span><AddFavorites movie={movie} /></span> <span><AddRoulette movie={movie} /></span></h3>
      <Link to={`/pelicula/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster de la pelicula ${movie.title}`} />
        <p>Puntiacion: {movie.vote_average}/10</p>
      </Link>
    </article>
  )
}

export default Item