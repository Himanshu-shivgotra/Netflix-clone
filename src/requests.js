const API_KEY = "e8dddea89964a604507c6e939299598e"

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests;

// https://api.themoviedb.org/3/trending/all/week?api_key=e8dddea89964a604507c6e939299598e&language=en-US

// https://api.themoviedb.org/3/trending/all/week?api_key=e8dddea89964a604507c6e939299598e&language=en-US 

// api.themoviedb.org/3/movie/223313/videos?api_key=e8dddea89964a604507c6e939299598e&language=en-US