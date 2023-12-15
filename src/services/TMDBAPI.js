const accesTokenAuth = import.meta.env.VITE_TMDB_ACCES_TOKEN_AUTH;

export const optionsApi = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${accesTokenAuth}`
  }
};

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
const fechaActual = new Date();
const haceNoventaDias = new Date(fechaActual);
haceNoventaDias.setDate(fechaActual.getDate() - 90);

const fechaActualFormattedDate = formatDate(fechaActual);
const haceNoventaDiasFormattedDate = formatDate(haceNoventaDias);


export const fetchTopMovie = (numberPage = 1) => `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=${numberPage}&sort_by=vote_average.desc&vote_count.gte=3000&with_genres=27&without_genres=16%2C35`

export const fetchNowPlaying = (numberPage = 1) => `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=${numberPage}&with_genres=27&without_genres=16%2C35&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${haceNoventaDiasFormattedDate}&release_date.lte=${fechaActualFormattedDate}`

export const fetchMovieById = (id) => `https://api.themoviedb.org/3/movie/${id}?language=es-ES`

export const fetchMovies = (decada, numberPage = 1) => `https://api.themoviedb.org/3/discover/movie?with_genres=27&sort_by=vote_average.desc&vote_count.gte=1000&include_adult=false&language=es-ES&primary_release_date.gte=${decada}-01-01&primary_release_date.lte=${parseInt(decada) + 9}-12-31&page=${numberPage}&without_genres=16%2C35`

export const fetchSearchMovies = (query, numberPage = 1) => `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=${numberPage}&sort_by=popularity.desc&with_genres=27&without_genres=16%2C35&with_text_query=${query}`