import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import Login from "../Login/Login"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import "./UserProfile.css"

const UserProfile = () => {

  const { usuario, handleCerrarSesion, peliculasGanadoras, peliculasFavoritas } = useContext(UserContext)

  if (!usuario) {
    return <Login />
  }
  return (
    <>
      <h2>Perfil</h2>
      <div className="perfil">
        <ProfilePhoto />
        <h3>{usuario.nombre} {usuario.apellido}</h3>
        <div>
          <h4>Peliculas ganadoras de ruleta</h4>
          {peliculasGanadoras?.map((movie, index) => (
            <p key={index}>{movie}</p>
          ))}
        </div>
        <div>
          <h4>Peliculas Favoritas</h4>
          {peliculasFavoritas?.map(movie => (
            <p key={movie.id}>{movie.title}</p>
          ))}
        </div>
        <button onClick={handleCerrarSesion}>Cerrar sesion</button>
      </div>
    </>

  )
}

export default UserProfile