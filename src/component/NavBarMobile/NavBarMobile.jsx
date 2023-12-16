import { faHouse, faUser, faHeart, faDharmachakra, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import "./NavBarMobile.css"

const NavBarMobile = () => {
  return (
    <div className="navBarMobile">
      <Link to={"/"} onClick={() => {window.scrollTo(0, 0);}} className="containerIconMobile"> <FontAwesomeIcon icon={faHouse} className="navMobileIcon"/><span>Inicio</span> </Link>
      <Link to={"/busqueda"} className="containerIconMobile"> <FontAwesomeIcon icon={faMagnifyingGlass} className="navMobileIcon"/><span>Busqueda</span></Link>
      <Link className="containerIconMobile"> <FontAwesomeIcon icon={faDharmachakra} className="bigger navMobileIcon"/><span>Ruleta</span></Link>
      <Link className="containerIconMobile"> <FontAwesomeIcon icon={faHeart} className="navMobileIcon"/><span>Favoritos</span></Link>
      <Link to={"/login"} className="containerIconMobile"> <FontAwesomeIcon icon={faUser} className="navMobileIcon"/><span>Perfil</span></Link>
    </div>
  )
}

export default NavBarMobile