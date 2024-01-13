import { useState } from "react"
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../services/firebase"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const MySwal = withReactContent(Swal)

  const iniciarSesion = async (e) => {
    e.preventDefault()
    if (email && password) {
    await signInWithEmailAndPassword(auth, email, password)
    .then(response => {response.user && navigate("/perfil")})
    .catch(error => {
      setError("Contraseña o email incorrecto")
      setEmail("")
      setPassword("")
    })
    } else {
      setEmail("")
      setPassword("")
      setError("Debes completar ambas solicitudes")
    }
  }

  const handleForgetPassword = () => {
    if (email) {
      auth.useDeviceLanguage()
    sendPasswordResetEmail(auth, `${email}`)
    MySwal.fire({
      toast: true,
      icon: 'success',
      title: 'Se envio el mail de cambio de contraseña',
      animation: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })
    setTimeout(() => {
      navigate("/")
    window.location.reload()
    }, 3500)
    } else {
      setEmail("")
      setPassword("")
      setError("Debes completar el email")
    }
    
  }

  return (
    <main className="Login">
      <h2>Iniciar Sesion</h2>
      <form onSubmit={iniciarSesion}>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} className={error ? "error" : ""} placeholder={error ? `${error}` : ""}/>

        <label htmlFor="password">Contraseña: </label>
        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} className={error ? "error" : ""} placeholder={error ? `${error}` : ""}/>

        <button type="submit">Iniciar Sesion</button>
        <p onClick={handleForgetPassword}>Olvide la contraseña</p>
        <Link to={"/crear-cuenta"}>Crear cuenta</Link>
      </form>
    </main>
  )
}

export default Login