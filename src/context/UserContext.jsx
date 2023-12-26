import { useState, createContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { auth, db, storage } from "../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDoc, doc, updateDoc, arrayUnion, arrayRemove, onSnapshot } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export const UserContext = createContext({
  usuario: undefined,
  peliculasFavoritas: undefined,
  ruleta: []
})

export const UserProvider = ({ children }) => {

  const [usuario, setUsuario] = useState(undefined)
  const [uid, setUid] = useState("")
  const [peliculasFavoritas, setPeliculasFavoritas] = useState(undefined)
  const [ruleta, setRuleta] = useState([])
  const navigate = useNavigate()

  const MySwal = withReactContent(Swal)

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "usuarios", user.uid)
        const document = await getDoc(docRef)
        setUsuario(document.data())
        setUid(user.uid)
        setPeliculasFavoritas(document.data().peliculasFavoritas)
        const unsub = onSnapshot(docRef, (doc) => {
          setPeliculasFavoritas(doc.data().peliculasFavoritas)
          setUsuario(doc.data())
        })
        return () => unsub()
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

  const handleAgregarFavorito = async (movie) => {
    const docRef = doc(db, "usuarios", uid);
    await updateDoc(docRef, {
      peliculasFavoritas: arrayUnion(movie)
    })
  }

  const handleBorrarFavorito = async (movie) => {
    const docRef = doc(db, "usuarios", uid);
    await updateDoc(docRef, {
      peliculasFavoritas: arrayRemove(movie)
    })
  }

  const agregarFotoDePerfil = async (photoURL) => {
    const userRef = doc(db, "usuarios", uid);
    await updateDoc(userRef, {
      photoURL: photoURL
    });
  };

  const eliminarFotoAnterior = async (anteriorUrl) => {
    const imgRef = ref(storage, anteriorUrl);
    await deleteObject(imgRef)
  };

  const handleSubirImg = async (file) => {
    if (file) {
      if (usuario.photoURL) {
        await eliminarFotoAnterior(usuario.photoURL);
      }
      const storageRef = ref(storage, `perfiles/${uid}/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      await agregarFotoDePerfil(url);
    }
  };

  const handleRuleta = (movie) => {
    const movieExistente = ruleta.find(item => item.id === movie.id)

    if (ruleta.length >= 5 && !movieExistente) {
      MySwal.fire({
        toast: true,
        icon: 'error',
        title: 'Ya tienes 5 seleccionadas',
        animation: false,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
    } else {
      if (!movieExistente) {
        setRuleta(prev => [...prev, movie])
      } else {
        const actualizarRuleta = ruleta.filter(item => item.id !== movie.id)
        setRuleta(actualizarRuleta)
      }
    }
  }

  return (
    <UserContext.Provider value={{ usuario, peliculasFavoritas, ruleta, handleCerrarSesion, handleAgregarFavorito, handleBorrarFavorito, handleSubirImg, handleRuleta }}>
      {children}
    </UserContext.Provider>
  )
}