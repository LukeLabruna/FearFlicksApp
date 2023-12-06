import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>Bienvenido a MoviesHorror</h1>
    <Link to="/decada/1970">Decada 70</Link>
    <Link to="/decada/1980">Decada 80</Link>
    <Link to="/decada/1990">Decada 90</Link>
    <Link to="/decada/2000">Decada 00</Link>
    <Link to="/decada/2010">Decada 10</Link>
    <Link to="/decada/2020">Decada 20</Link>
    </>
  )
}

export default Home