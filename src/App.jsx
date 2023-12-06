import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import './App.css'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer'
import Home from './component/Home/Home'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/decada/:decada' element={<ItemListContainer />}/>
          <Route path='/decada/:decada/pagina/:numberPage' element={<ItemListContainer />}/>
          <Route path='/pelicula/:id' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
