import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer'
import Home from './component/Home/Home'
import NavBar from './component/NavBar/NavBar'

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/decada/:decada/pagina/:numberPage' element={<ItemListContainer />}/>
          <Route path='/pelicula/:id' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
