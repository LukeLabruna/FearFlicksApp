import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import Login from "../Login/Login"
import MiniItem from "../MiniItem/MiniItem"
import AuthenticateEmail from "../AuthenticateEmail/AuthenticateEmail"

const Favorites = () => {
  const { peliculasFavoritas, usuario, emailVerified } = useContext(UserContext)

  if (emailVerified) {
    return (
      <main>
        <h2>Favoritas</h2>
        {peliculasFavoritas.map((movie) => (
          <MiniItem key={movie.id} movie={movie} />
        ))}
      </main>
    )
  } else if (usuario && !emailVerified) {
    return <AuthenticateEmail />
  } else {
    return <Login />
  }


}

export default Favorites