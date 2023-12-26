import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDharmachakra } from "@fortawesome/free-solid-svg-icons"


const AddRoulette = ({movie}) => {

  const { handleRuleta, ruleta } = useContext(UserContext)

  const isFavorite = ruleta.find(item => (item.id === movie.id) )

  return (
    <FontAwesomeIcon icon={faDharmachakra}
    onClick={() => handleRuleta(movie)}
    style={{
      color: isFavorite ? "#b80000" : "#ffffff"
    }}
    />
  )
}

export default AddRoulette