import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../services/firebase"
import { Link } from "react-router-dom"
import "./Login.css"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const iniciarSesion = async (e) => {
    e.preventDefault()
    await signInWithEmailAndPassword(auth, email, password)
    .then(response => {response.user && navigate("/perfil")})
    .catch(error => {
      setError("Contraseña o email incorrecto")
      setEmail("")
      setPassword("")
    })
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
        <Link to={"/crear-cuenta"}>Crear cuenta</Link>
      </form>
    </main>
  )
}

export default Login