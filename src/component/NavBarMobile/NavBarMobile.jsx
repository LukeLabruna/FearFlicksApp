import { faHouse, faUser, faHeart, faDharmachakra, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import "./NavBarMobile.css"

const NavBarMobile = () => {
  return (
    <div className="navBarMobile">
      <Link to={"/"} onClick={() => {window.scrollTo(0, 0);}}> <FontAwesomeIcon icon={faHouse} className="navMobileIcon"/> </Link>
      <Link to={"/busqueda"}> <FontAwesomeIcon icon={faMagnifyingGlass} className="navMobileIcon"/> </Link>
      <Link> <FontAwesomeIcon icon={faDharmachakra} className="bigger navMobileIcon"/> </Link>
      <Link> <FontAwesomeIcon icon={faHeart} className="navMobileIcon"/> </Link>
      <Link> <FontAwesomeIcon icon={faUser} className="navMobileIcon"/> </Link>
    </div>
  )
}

export default NavBarMobile