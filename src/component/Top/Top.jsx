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
        if (numberPage === 1) {
          setMovies(response.results.filter(movie => movie.overview.trim() !== ""));
        } else {
          setMovies(prevMovies => [...prevMovies, ...response.results.filter(movie => movie.overview.trim() !== "")]);
        }
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchData()
  }, [numberPage])

  return (
    <main>
      <InfiniteScroll
        dataLength={movies.length}
        next={() => setNumberPage((prevPage) => prevPage + 1)}
        hasMore={true}
      >
        <ItemListContainer titulo={"Principales"} movies={movies} loading={loading} />
      </InfiniteScroll>
    </main>
  )
}

export default Top