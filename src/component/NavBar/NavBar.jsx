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
      <Link className="brand" to={'/'} disabled><h1 style={{ color: "white" }}>FearFlicks</h1></Link><span onClick={handleMostrar}><FontAwesomeIcon icon={faAngleDown} /></span>
        <nav className={`decadas ${mostrar ? "mostrar" : ""}`}>
          <p>Años</p>
          <div>
            <Link to={'/decada/1970'}>1970</Link>
            <Link to={'/decada/1980'}>1980</Link>
            <Link to={'/decada/1990'}>1990</Link>
            <Link to={'/decada/2000'}>2000</Link>
            <Link to={'/decada/2010'}>2010</Link>
            <Link to={'/decada/2020'}>2020</Link>
          </div>
        </nav>
        <div className="usuario">
          <p>Iniciar Sesion</p>
        </div>
    </header>
  )
}

export default NavBar