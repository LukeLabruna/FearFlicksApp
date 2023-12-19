import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Top from './component/Top/Top'
import NowPlaying from './component/NowPlaying/NowPlaying'
import Decade from './component/Decade/Decade'
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer'
import Home from './component/Home/Home'
import NavBar from './component/NavBar/NavBar'
import NavBarMobile from './component/NavBarMobile/NavBarMobile'
import Search from './component/Search/Search'
import Login from './component/Login/Login'
import CreateAccount from './component/CreateAccount/CreateAccount'
import { UserProvider } from './context/UserContext'
import UserProfile from './component/UserProfile/UserProfile'
import Favorites from './component/Favorites/Favorites'

function App() {


  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/decada/:decada' element={<Decade />} />
            <Route path='/top' element={<Top />} />
            <Route path='/estrenos' element={<NowPlaying />} />
            <Route path='/pelicula/:id' element={<ItemDetailContainer />} />
            <Route path='/busqueda' element={<Search />} />
            <Route path='/crear-cuenta' element={<CreateAccount />} />
            <Route path='/perfil' element={<UserProfile />} />
            <Route path='/favoritas' element={<Favorites />} />
          </Routes>
          <NavBarMobile />
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
