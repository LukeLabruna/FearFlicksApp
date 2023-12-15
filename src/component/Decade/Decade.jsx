import { useState, useEffect } from "react";
import { optionsApi, fetchMovies } from "../../services/TMDBAPI";
import InfiniteScroll from "react-infinite-scroll-component";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";

const Decade = () => {
  const [movies, setMovies] = useState([])
  const [numberPage, setNumberPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const { decada } = useParams()

  const fetchData = async () => {
    await fetch(fetchMovies(decada, numberPage), optionsApi)
      .then(response => response.json())
      .then(response => {
        const movieFilter = response.results.filter(movie => movie.overview.trim() !== "")
        setMovies((prevMovies) => [...prevMovies, ...movieFilter])
        setLoading(false)
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    console.log("1", numberPage)
    // window.scrollTo(0, 0)
    setNumberPage(1)
    setMovies([])
    console.log("2", numberPage)
  }, [decada])

  useEffect(() => {
    console.log("3", numberPage)
    fetchData()
    console.log("4", numberPage)
  }, [numberPage])



  return (
    <>
      <InfiniteScroll
      dataLength={movies.length}
      next={() => setNumberPage((prevPage) => prevPage + 1)}
      hasMore={true}
      >
      <ItemListContainer titulo={`Años ${decada}`} movies={movies} loading={loading} />
      </InfiniteScroll>
    </>
  )
}

export default Decade