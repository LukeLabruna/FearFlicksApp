import ItemList from "../ItemList/ItemList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const ItemListContainer = ({titulo, movies, loading}) => {
  return (
    <>
      <h2>{titulo}</h2>
      
        <ItemList movies={movies} />
      
      {loading && <p>Cargando <FontAwesomeIcon icon={faSpinner} spinPulse className="loading" /></p>}
    </>
  )
}

export default ItemListContainer