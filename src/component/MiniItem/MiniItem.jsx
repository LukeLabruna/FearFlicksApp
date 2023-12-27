import { Link } from "react-router-dom"
import AddFavorites from "../AddFavorites/AddFavorites"
import AddRoulette from "../AddRoulette/AddRoulette"
import "./MiniItem.css"

const MiniItem = ({ movie }) => {
  return (
    <div className="miniItem">
      <Link to={`/pelicula/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster de la pelicula ${movie.title}`} />
      </Link>
      <h4>{movie.title} <span><AddFavorites movie={movie} /> <AddRoulette movie={movie} /></span></h4>
    </div>
  )
}

export default MiniItem