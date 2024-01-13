import { auth, db } from "../../services/firebase"
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import { setDoc, doc } from "firebase/firestore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./CreateAccount.css"

const CreateAccount = () => {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [password, setPassword] = useState("")
  const [confirmacionPassword, setConfirmacionPassword] = useState("")
  const [email, setEmail] = useState("")
  const [confirmacionEmail, setConfirmacionEmail] = useState("")

  const [errorVacio, setErrorVacio] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")

  const navigate = useNavigate()

  const handleCreatAccount = async (e) => {
    e.preventDefault()

    if (!nombre || !apellido || !email || !confirmacionEmail || !password || !confirmacionPassword) {
      setErrorVacio("El campo esta vacio!")
      return;
    }

    if (email !== confirmacionEmail) {
      setErrorEmail("El email no coinciden!")
      return;
    }

    if (password !== confirmacionPassword) {
      setErrorPassword("La contraseña no coinciden!")
      return;
    }

    const nuevoUsuario = {
      nombre,
      apellido,
      email,
      peliculasFavoritas: [],
      peliculasGanadoras: [],
    }


    await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => { 
        auth.useDeviceLanguage()
        sendEmailVerification(response.user)
        setDoc(doc(db, "usuarios", `${response.user.uid}`), nuevoUsuario)
        navigate("/")
      })
      .catch(error => console.log(error))
  }

  return (
    <main className="CreateAccount">
    <h2>Crear Usuario</h2>
    <form onSubmit={handleCreatAccount}>

        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} className={errorVacio ? "error" : ""} />
          {!nombre && <p>{errorVacio}</p>}
        </div>

        <div>
          <label htmlFor="apellido">Apellido: </label>
          <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} className={errorVacio ? "error" : ""} />
          {!apellido && <p>{errorVacio}</p>}
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} className={errorEmail || errorVacio ? "error" : ""} />
          {email !== confirmacionEmail && <p>{errorEmail}</p>}
          {!email && <p>{errorVacio}</p>}
        </div>

        <div>
          <label htmlFor="confirmacionEmail">Confirmar email: </label>
          <input type="email" id="confirmacionEmail" onChange={(e) => setConfirmacionEmail(e.target.value)} className={errorEmail || errorVacio ? "error" : ""} />
          {email !== confirmacionEmail && <p>{errorEmail}</p>}
          {!confirmacionEmail && <p>{errorVacio}</p>}
        </div>

        <div>
          <label htmlFor="password">Contraseña: </label>
          <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} className={errorPassword || errorVacio ? "error" : ""} />
          {password !== confirmacionPassword && <p>{errorPassword}</p>}
          {!password && <p>{errorVacio}</p>}
        </div>

        <div>
          <label htmlFor="confirmacionPassword">Confirmar contraseña: </label>
          <input type="password" id="confirmacionPassword" onChange={(e) => setConfirmacionPassword(e.target.value)} className={errorPassword || errorVacio ? "error" : ""} />
          {password !== confirmacionPassword && <p>{errorPassword}</p>}
          {!confirmacionPassword && <p>{errorVacio}</p>}
        </div>

        <button type="submit">Crear Usuario</button>
      </form>
    </main>
  )
}

export default CreateAccount