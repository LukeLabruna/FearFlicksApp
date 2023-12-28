import { Link } from "react-router-dom"
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"


const NavBar = () => {
  const [mostrar, setMostrar] = useState(false)

  const handleMostrar = (e) => {
    e.stopPropagation()
    setMostrar(!mostrar)
  }

  useEffect(() => {
    const handleClickAfuera = () => {
      if (mostrar) {
        setMostrar(false)
      }
    }
    const handleScroll = () => {
      if (mostrar) {
        setMostrar(false)
      }
    }

    document.addEventListener("click", handleClickAfuera)
    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("click", handleClickAfuera)
      document.removeEventListener("scroll", handleScroll)
    }
  }, [mostrar]);

  return (
    <header>
      <Link className="brand" to={'/'} onClick={() => {window.scrollTo(0, 0);}}><h1 style={{ color: "white" }}>FearFlicks</h1></Link><span onClick={handleMostrar}><FontAwesomeIcon icon={faAngleDown} /></span>
        <nav className={`categorias ${mostrar ? "mostrar" : ""}`}>
          <p>Categorias</p>
          <div>
            <Link to={'/estrenos'}>Top</Link>
            <Link to={'/top'}>Estrenos</Link>
            <Link to={'/decada'}>Por Años</Link>
          </div>
        </nav>
        <div className="usuario">
          <p>Iniciar Sesion</p>
        </div>
    </header>
  )
}

export default NavBar