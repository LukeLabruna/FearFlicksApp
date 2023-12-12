const accesTokenAuth = import.meta.env.VITE_TMDB_ACCES_TOKEN_AUTH;

export const optionsApi = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${accesTokenAuth}`
  }
};

export const fetchTopMovie = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=vote_average.desc&vote_count.gte=3000&with_genres=27&without_genres=16"

export const fetchNowPlaying = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&with_genres=27&sort_by=release_date.desc&vote_count.gte=1000&without_genres=16"

export const fetchMovieById = (id) => `https://api.themoviedb.org/3/movie/${id}?language=es-ES`

export const fetchMovies = (decada, numberPage) => `https://api.themoviedb.org/3/discover/movie?with_genres=27&sort_by=popularity.desc&include_adult=false&language=es-ES&primary_release_date.gte=${decada}-01-01&primary_release_date.lte=${parseInt(decada) + 9}-12-31&page=${numberPage}&without_genres=16`

