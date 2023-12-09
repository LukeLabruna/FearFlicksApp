import { Link } from "react-router-dom"
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"




const NavBar = () => {

  return (
    <header>
      <Link className="brand" to={'/'}><h1 style={{ color: "white" }}>FearFlicks</h1></Link>
        <nav className="decadas">
          <p>Años</p>
          <div>
            <Link to={'/decada/1960/pagina/1'}>1960</Link>
            <Link to={'/decada/1970/pagina/1'}>1970</Link>
            <Link to={'/decada/1980/pagina/1'}>1980</Link>
            <Link to={'/decada/1990/pagina/1'}>1990</Link>
            <Link to={'/decada/2000/pagina/1'}>2000</Link>
            <Link to={'/decada/2010/pagina/1'}>2010</Link>
            <Link to={'/decada/2020/pagina/1'}>2020</Link>
          </div>
        </nav>
        <div className="usuario">
          <p>Iniciar Sesion</p>
        </div>
    </header>
  )
}

export default NavBar