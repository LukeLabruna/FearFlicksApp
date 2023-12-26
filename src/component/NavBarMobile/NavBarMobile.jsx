import { faHouse, faUser, faHeart, faDharmachakra, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import "./NavBarMobile.css"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const NavBarMobile = () => {
  const { usuario } = useContext(UserContext)

  return (
    <div className="navBarMobile">
      <Link to={"/"} onClick={() => { window.scrollTo(0, 0); }} className="containerIconMobile">
        <FontAwesomeIcon icon={faHouse} className="navMobileIcon" />
        <span>Inicio</span>
      </Link>
      <Link to={"/busqueda"} className="containerIconMobile">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="navMobileIcon" />
        <span>Busqueda</span>
      </Link>
      <Link to={"/ruleta"} className="containerIconMobile">
        <FontAwesomeIcon icon={faDharmachakra} className="bigger navMobileIcon" />
        <span>Ruleta</span>
      </Link>
      <Link to={"/favoritas"} className="containerIconMobile">
        <FontAwesomeIcon icon={faHeart} className="navMobileIcon" />
        <span>Favoritos</span>
      </Link>
      <Link to={"/perfil"} className="containerIconMobile">
        { usuario?.photoURL
          ? <img src={usuario.photoURL} alt="Foto del usuario"/>
          : <FontAwesomeIcon icon={faUser} className="navMobileIcon" />
          }
        <span>Perfil</span>
      </Link>
    </div>
  )
}

export default NavBarMobile