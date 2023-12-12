import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {

  return (
    <header>
      <Link className="brand" to={'/'}><h1 style={{ color: "white" }}>FearFlicks</h1></Link>
        <nav className="decadas">
          <p>Años</p>
          <div>
            <Link to={'/decada/1960'}>1960</Link>
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