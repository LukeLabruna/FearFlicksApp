import { BrowserRouter, Route, Routes} from 'react-router-dom'
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

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/decada/:decada' element={<Decade />}/>
          <Route path='/top' element={<Top />}/>
          <Route path='/estrenos' element={<NowPlaying />}/>
          <Route path='/pelicula/:id' element={<ItemDetailContainer />}/>
          <Route path='/busqueda' element={<Search />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/crear-cuenta' element={<CreateAccount />}/>
        </Routes>
        <NavBarMobile />
      </BrowserRouter>
    </>
  )
}

export default App
