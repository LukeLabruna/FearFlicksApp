import { Link } from "react-router-dom"

const ItemList = ({movies}) => {
  return (
    <>
    {movies && movies.length > 0
        ?
        (movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <Link to={`/pelicula/${movie.id}`}>Ver Detalle</Link>
          </div>
        )))
        :
        <h2>No se encuentran peliculas</h2>
      }
    </>
  )
}

export default ItemList