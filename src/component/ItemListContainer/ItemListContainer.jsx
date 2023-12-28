import ItemList from "../ItemList/ItemList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import SelectDecade from "../SelectDecade/SelectDecade";


const ItemListContainer = ({ titulo, movies, loading, decade }) => {
  return (
    <>
      <h2>{titulo}</h2>

      <ItemList movies={movies} />

      {loading && <p>Cargando <FontAwesomeIcon icon={faSpinner} spinPulse className="loading" /></p>}
    </>
  )
}

export default ItemListContainer