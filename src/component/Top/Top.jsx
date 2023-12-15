import { useState, useEffect } from "react";
import { optionsApi, fetchTopMovie } from "../../services/TMDBAPI";
import InfiniteScroll from "react-infinite-scroll-component";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Top = () => {
  const [movies, setMovies] = useState([])
  const [numberPage, setNumberPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    await fetch(fetchTopMovie(numberPage), optionsApi)
      .then(response => response.json())
      .then(response => {
        const movieFilter = response.results.filter(movie => movie.overview.trim() !== "")
        setMovies((prevMovies) => [...prevMovies, ...movieFilter])
        setLoading(false)
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchData()
  }, [numberPage])

  console.log(movies)

  return (
    <>
      <InfiniteScroll
      dataLength={movies.length}
      next={() => setNumberPage((prevPage) => prevPage + 1)}
      hasMore={true}
      >
      <ItemListContainer titulo={"Top"} movies={movies} loading={loading} />
      </InfiniteScroll>
    </>
  )
}

export default Top