import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./ProfilePhoto.css"
import { faUser } from '@fortawesome/free-solid-svg-icons'

const ProfilePhoto = () => {

  const { handleSubirImg, usuario } = useContext(UserContext)

  const [file, setFile] = useState(usuario.photoURL)
  const [fileChange, setFileChange] = useState(false)
  const [previewUrl, setPreviewUrl] = useState(null)

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };

      reader.readAsDataURL(selectedFile);
    }
    setFileChange(true)
  }

  return (
    <div className='profilePhoto'>
      <label htmlFor="file">{
        usuario.photoURL
        ?
        <img src={previewUrl ? previewUrl : file} alt="" />
        :
        previewUrl
          ? <img src={previewUrl} alt="" />
          : <FontAwesomeIcon icon={faUser} className='noFotoPerfil'/>
          
      }</label>
      <input type="file" onChange={handleFileChange} id="file" />
      {fileChange 
        ?
        <button
          onClick={() => {
            handleSubirImg(file)
            setFileChange(false)
          }} >
          Cambiar foto de perfil
        </button>
        : 
        <label htmlFor="file"><button>Seleccionar foto de perfil</button></label>
      }
    </div>
  )
}

export default ProfilePhoto