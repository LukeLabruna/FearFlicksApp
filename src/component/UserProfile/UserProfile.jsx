import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import Login from "../Login/Login"

const UserProfile = () => {

  const {usuario, handleCerrarSesion} = useContext(UserContext)

  if (!usuario) {
    return <Login />
  }
  return (
    <>
    <p>{usuario.nombre}</p>
    <button onClick={handleCerrarSesion}>Cerrar sesion</button>
    </>
    
  )
}

export default UserProfile