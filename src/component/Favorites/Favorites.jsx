import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import AddFavorites from "../AddFavorites/AddFavorites"
import "./Favorites.css"
import { Link } from "react-router-dom"
import  Login  from "../Login/Login"

const Favorites = () => {
  const { peliculasFavoritas, usuario } = useContext(UserContext)

  if (usuario) {
    return (
      <>
        <h2>Favoritas</h2>
        {peliculasFavoritas.map((movie) => (
          <Link to={`/pelicula/${movie.id}`} className="favorites" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster de la pelicula ${movie.title}`} />
            <h4>{movie.title} <span><AddFavorites movie={movie} /></span></h4>
          </Link>
        ))}
      </>
    )
  } return <Login />
  

}

export default Favorites