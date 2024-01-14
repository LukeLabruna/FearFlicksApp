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
      handleSubirImg(selectedFile)
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
          
      }<p>Cambiar foto de perfil</p>
      </label>
      <input type="file" onChange={handleFileChange} id="file" />
    </div>
  )
}

export default ProfilePhoto