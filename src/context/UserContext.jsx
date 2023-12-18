import { useState, createContext, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { auth, db } from "../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

export const UserContext = createContext({
  usuario: null
})

export const UserProvider = ({ children }) => {

  const [usuario, setUsuario] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "usuarios", user.uid)
        const document = await getDoc(docRef)
        setUsuario(document.data())
      }
    })
  }, [])

  const handleCerrarSesion = async () => {
    await signOut(auth).then(() => {
      setUsuario("")
      navigate("/")
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <UserContext.Provider value={{usuario, handleCerrarSesion}}>
      {children}
    </UserContext.Provider>
  )
}