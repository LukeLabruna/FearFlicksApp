import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({movies}) => {
  return (
    <section className="itemList">
    {movies && movies.length > 0
        ?
        (movies.map((movie) => (
          <Item key={movie.id} movie={movie}/>
        )))
        :
        <h2>No se encuentran peliculas</h2>
      }
    </section>
  )
}

export default ItemList