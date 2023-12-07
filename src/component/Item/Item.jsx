import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({title, poster_path, id, vote_average}) => {
  return (
    <article className="item">
      <h3>{title}</h3>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`Poster de la pelicula ${title}`} />
      <p>Puntiacion: {vote_average}/10</p>
      <Link to={`/pelicula/${id}`}>Ver Detalle</Link>
    </article>
  )
}

export default Item