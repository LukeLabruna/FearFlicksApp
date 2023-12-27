import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import Login from "../Login/Login"
import MiniItem from "../MiniItem/MiniItem"

const Favorites = () => {
  const { peliculasFavoritas, usuario } = useContext(UserContext)

  if (usuario) {
    return (
      <>
        <h2>Favoritas</h2>
        {peliculasFavoritas.map((movie) => (
          <MiniItem key={movie.id} movie={movie} />
        ))}
      </>
    )
  } return <Login />


}

export default Favorites