import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import Login from "../Login/Login"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import "./UserProfile.css"

const UserProfile = () => {

  const { usuario, handleCerrarSesion } = useContext(UserContext)

  if (!usuario) {
    return <Login />
  }
  return (
    <div className="perfil">
      <h2>Perfil</h2>
      <div>
        <ProfilePhoto />
        <p>{usuario.nombre} {usuario.apellido}</p>
      </div>
      <button onClick={handleCerrarSesion}>Cerrar sesion</button>
    </div>

  )
}

export default UserProfile