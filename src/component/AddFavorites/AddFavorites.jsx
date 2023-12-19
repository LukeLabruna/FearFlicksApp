import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

const AddFavorites = ({movie}) => {

  const {handleAgregarFavorito, handleBorrarFavorito, peliculasFavoritas} = useContext(UserContext)

  const isFavorite = peliculasFavoritas?.find(item => (item.id === movie.id) )

  return (
    <FontAwesomeIcon icon={faHeart} 
      onClick={() => {
        isFavorite 
          ? handleBorrarFavorito(movie)
          : handleAgregarFavorito(movie)   
        }} 
        style={{
          color: isFavorite ? "#b80000" : "#ffffff"
        }}
      />
  )
}

export default AddFavorites