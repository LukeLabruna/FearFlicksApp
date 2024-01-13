import { auth } from "../../services/firebase"
import { sendEmailVerification } from "firebase/auth"
import "./AuthenticateEmail.css"
import { useNavigate } from "react-router-dom"

const AuthenticateEmail = () => {

  const navigate = useNavigate()

  const handleEmail = () => {
    auth.useDeviceLanguage()
    sendEmailVerification(auth.currentUser)
    navigate("/")
    window.location.reload()
  }

  return (
    <main className="authentication">
        <h2>Autentificacion</h2>
        <p>Debes autentificar el mail para acceder a esta seccion</p>
        <button onClick={handleEmail}>Reenviar mail de autenticación</button>
      </main>
  )
}

export default AuthenticateEmail