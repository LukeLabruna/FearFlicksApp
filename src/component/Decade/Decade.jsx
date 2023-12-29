import { useState, useEffect } from "react";
import { optionsApi, fetchMovies } from "../../services/TMDBAPI";
import InfiniteScroll from "react-infinite-scroll-component";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import SelectDecade from "../SelectDecade/SelectDecade";

const Decade = () => {
  const [movies, setMovies] = useState([])
  const [numberPage, setNumberPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const { decada } = useParams()
  const year = new Date().getFullYear();

  const fetchData = async () => {
    setLoading(true)
    await fetch(fetchMovies(`${!decada ? year : decada}`, numberPage), optionsApi)
      .then(response => response.json())
      .then(response => {
        if (numberPage === 1) {
          setMovies(response.results.filter(movie => movie.overview.trim() !== ""));
        } else {
          setMovies(prevMovies => [...prevMovies, ...response.results.filter(movie => movie.overview.trim() !== "")]);
        }
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setMovies([]);
    if(numberPage === 1){
      fetchData()
    }
    setNumberPage(1);
  }, [decada])

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
        <SelectDecade />
        <ItemListContainer titulo={`Años ${!decada ? year : decada}`} movies={movies} loading={loading} />
      </InfiniteScroll>
    </main>
  )
}

export default Decade