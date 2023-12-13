import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer'
import Home from './component/Home/Home'
import NavBar from './component/NavBar/NavBar'
import NavBarMobile from './component/NavBarMobile/NavBarMobile'

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/decada/:decada' element={<ItemListContainer />}/>
          <Route path='/top' element={<ItemListContainer />}/>
          <Route path='/enCartelera' element={<ItemListContainer />}/>
          <Route path='/pelicula/:id' element={<ItemDetailContainer />}/>
        </Routes>
        <NavBarMobile />
      </BrowserRouter>
    </>
  )
}

export default App
